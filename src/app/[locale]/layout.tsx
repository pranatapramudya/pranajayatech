import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { JsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = "https://www.pranajayatech.online";

  const isId = locale === 'id';

  const title = isId 
    ? "PranajayaTech | Software House & Jasa Pembuatan Website B2B/B2C" 
    : "PranajayaTech | Custom Web, SaaS & E-Commerce Agency";

  const description = isId 
    ? "PranajayaTech adalah Software House dari Sumedang, Indonesia. Kami membantu digitalisasi bisnis Anda melalui pembuatan website custom, e-commerce toko online, hingga aplikasi manajemen B2B dan B2C siap pakai."
    : "PranajayaTech is a premium software agency based in Indonesia. We build custom web applications, consumer e-commerce platforms, and ship production-ready premium SaaS boilerplates in weeks.";

  const keywords = isId
    ? ["Software House Sumedang", "Jasa Pembuatan Website", "Jasa Pembuatan Aplikasi Bisnis", "Sistem Kasir Otomatis", "Digitalisasi UMKM", "Web Developer Indonesia", "E-Commerce Development", "B2C Applications", "Toko Online", "Retail Tech"]
    : ["Premium SaaS Boilerplate", "Next.js SaaS Template", "Custom Web Development Indonesia", "B2B Software Agency", "High-Availability Cloud Native", "E-Commerce Development", "B2C Applications", "Toko Online", "Retail Tech"];

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'id': '/id',
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${baseUrl}/${locale}`,
      siteName: "Pranajaya Tech",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.some((l) => l === locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground antialiased">
        <NextIntlClientProvider messages={messages}>
          <MotionProvider>
            {children}
          </MotionProvider>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
        <JsonLd />
      </body>
    </html>
  );
}
