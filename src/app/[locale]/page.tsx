import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Values } from "@/components/sections/Values";
import { Portfolio } from "@/components/sections/Portfolio";
import { Pricing } from "@/components/sections/Pricing";
import { Booking } from "@/components/sections/Booking";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <div className="flex-1 w-full flex flex-col">
          <Hero />
          <Values />
          <Portfolio />
          <Pricing />
          <Booking />
        </div>
      </main>
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/40">
        <p>&copy; {new Date().getFullYear()} Pranajaya Tech. All rights reserved.</p>
      </footer>
    </>
  );
}
