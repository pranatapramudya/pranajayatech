import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";
import { Footer } from "@/components/layout/Footer";

const loadingSkeleton = () => <div className="h-screen w-full animate-pulse bg-slate-900/10" />;

const Values = dynamic(() => import("@/components/sections/Values"), { loading: loadingSkeleton });
const Portfolio = dynamic(() => import("@/components/sections/Portfolio"), { loading: loadingSkeleton });
const Products = dynamic(() => import("@/components/sections/Products"), { loading: loadingSkeleton });
const Workflow = dynamic(() => import("@/components/sections/Workflow"), { loading: loadingSkeleton });
const Pricing = dynamic(() => import("@/components/sections/Pricing"), { loading: loadingSkeleton });
const Booking = dynamic(() => import("@/components/sections/Booking"), { loading: loadingSkeleton });

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
          <Products />
          <Workflow />
          <Pricing />
          <Booking />
        </div>
      </main>
      <Footer />
    </>
  );
}
