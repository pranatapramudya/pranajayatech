"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { Link } from "@/i18n/routing";
import { m } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

const MotionCard = m.create(Card);

export default function Pricing() {
  const t = useTranslations("Pricing");
  const isMobile = useMobile();

  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-zinc-950/50 -z-10"></div>
      <div className="container mx-auto px-4 sm:px-8 relative">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <m.h2 
            initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 via-zinc-400 to-zinc-800 drop-shadow-sm transform-gpu"
            style={{ willChange: "transform, opacity" }}
          >
            {t("title")}
          </m.h2>
          <m.p 
            initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-lg text-muted-foreground transform-gpu"
            style={{ willChange: "transform, opacity" }}
          >
            {t("subtitle")}
          </m.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {/* Tier 1 */}
          <MotionCard 
            className="bg-slate-900/90 md:bg-slate-900/40 md:backdrop-blur-md border border-white/10 hover:border-zinc-700 transition-all flex flex-col h-full relative transform-gpu"
            initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            whileHover={isMobile ? undefined : { y: -5, scale: 1.02, transition: { duration: 0.2 } }}
            style={{ willChange: "transform, opacity" }}
          >
            <CardHeader className="text-center pb-8 pt-10">
              <CardTitle className="text-2xl text-zinc-300">{t("tier1_name")}</CardTitle>
              <div className="mt-4 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-foreground">{t("tier1_price")}</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow pb-10">
              <ul className="space-y-4 text-sm text-zinc-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i} className="flex gap-x-3 items-center">
                    <Check className="h-5 w-5 text-zinc-500 flex-shrink-0" />
                    <span>{t(`tier1_detail${i}` as Parameters<typeof t>[0])}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pb-10 px-8">
              <Link 
                href="#contact"
                className={buttonVariants() + " w-full h-12 rounded-full text-base bg-zinc-800 hover:bg-zinc-700 text-zinc-100"}
              >
                {t("tier1_cta")}
              </Link>
            </CardFooter>
          </MotionCard>

          {/* Tier 2 (Premium) */}
          <MotionCard 
            className="bg-slate-900/95 md:bg-slate-900/60 md:backdrop-blur-md border border-blue-500/50 shadow-lg md:shadow-2xl md:shadow-blue-500/20 flex flex-col h-full relative overflow-hidden transform-gpu lg:scale-105 z-10"
            initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            whileHover={isMobile ? undefined : { y: -5, scale: 1.05, transition: { duration: 0.2 } }}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <div className="absolute top-0 right-0 p-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-semibold text-blue-400 ring-1 ring-inset ring-blue-500/20">
                <Zap className="h-3 w-3" /> Recommended
              </span>
            </div>
            <CardHeader className="text-center pb-8 pt-12">
              <CardTitle className="text-2xl text-blue-500">{t("tier2_name")}</CardTitle>
              <div className="mt-4 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-foreground">{t("tier2_price")}</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow pb-10">
              <ul className="space-y-4 text-sm text-zinc-300">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i} className="flex gap-x-3 items-center">
                    <Check className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span>{t(`tier2_detail${i}` as Parameters<typeof t>[0])}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pb-12 px-8">
              <Link 
                href="#contact"
                className={buttonVariants() + " w-full h-14 rounded-full text-base bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] border-0"}
              >
                {t("tier2_cta")}
              </Link>
            </CardFooter>
          </MotionCard>

          {/* Tier 3 */}
          <MotionCard 
            className="bg-slate-900/90 md:bg-slate-900/40 md:backdrop-blur-md border border-white/10 hover:border-zinc-700 transition-all flex flex-col h-full relative transform-gpu"
            initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            whileHover={isMobile ? undefined : { y: -5, scale: 1.02, transition: { duration: 0.2 } }}
            style={{ willChange: "transform, opacity" }}
          >
            <CardHeader className="text-center pb-8 pt-10">
              <CardTitle className="text-2xl text-zinc-300">{t("tier3_name")}</CardTitle>
              <div className="mt-4 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-foreground">{t("tier3_price")}</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow pb-10">
              <ul className="space-y-4 text-sm text-zinc-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i} className="flex gap-x-3 items-center">
                    <Check className="h-5 w-5 text-zinc-500 flex-shrink-0" />
                    <span>{t(`tier3_detail${i}` as Parameters<typeof t>[0])}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pb-10 px-8">
              <Link 
                href="#contact"
                className={buttonVariants() + " w-full h-12 rounded-full text-base bg-zinc-800 hover:bg-zinc-700 text-zinc-100"}
              >
                {t("tier3_cta")}
              </Link>
            </CardFooter>
          </MotionCard>
        </div>
      </div>
    </section>
  );
}
