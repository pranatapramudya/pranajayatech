"use client";

import { useTranslations } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import { Link } from "@/i18n/routing";
import { m } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

export function Hero() {
  const t = useTranslations("Hero");
  const isMobile = useMobile();

  return (
    <section className="relative overflow-hidden pt-24 pb-32 sm:pt-32 sm:pb-40 lg:pb-48" style={{ contain: "paint layout" }}>
      {/* Background glowing effects - OPTIMIZED: Replaced expensive blur with radial gradient & isolated layer */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),transparent_60%)] rounded-full pointer-events-none -z-10"
        style={{ willChange: "transform, opacity", transform: "translate3d(-50%, 0, 0)", contain: "strict" }}
      />
      <div 
        className="absolute inset-x-0 -top-40 -z-10 overflow-hidden hidden md:block sm:-top-80 opacity-50" 
        aria-hidden="true"
        style={{ willChange: "transform, opacity", transform: "translate3d(0, 0, 0)", contain: "strict" }}
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500/10 to-indigo-800/5 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <m.div 
            initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-8 flex justify-center transform-gpu will-change-transform"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="relative inline-flex overflow-hidden rounded-full p-[1px] active:scale-95 active:opacity-80 transition-all duration-75">
              <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#E2B875_50%,transparent_100%)]" />
              <div className="inline-flex cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm leading-6 font-medium text-primary backdrop-blur-3xl gap-2">
                <Terminal className="h-4 w-4" />
                Pranajaya Tech System <span className="hidden sm:inline">Online</span>
              </div>
            </div>
          </m.div>
          
          <m.h1 
            initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 via-zinc-300 to-zinc-600 drop-shadow-sm leading-tight transform-gpu will-change-transform"
            style={{ willChange: "transform, opacity" }}
          >
            {t("headline")}
          </m.h1>
          
          <m.p 
            initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto transform-gpu will-change-transform"
            style={{ willChange: "transform, opacity" }}
          >
            {t("subheadline")}
          </m.p>
          
          <m.div 
            initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center w-full gap-4 px-4 transform-gpu will-change-transform"
            style={{ willChange: "transform, opacity" }}
          >
            <Link 
              href="#contact" 
              className={buttonVariants({ size: "lg" }) + " w-full max-w-sm sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-full font-semibold px-8 h-12 border-0 transition-all duration-300 active:scale-95 active:opacity-80 active:duration-75 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)]"}
            >
              {t("cta_primary")} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href="#portfolio" 
              className={buttonVariants({ size: "lg", variant: "outline" }) + " w-full max-w-sm sm:w-auto rounded-full font-semibold px-8 h-12 border-border hover:bg-zinc-800/50 transition-all duration-300 active:scale-95 active:opacity-80 active:duration-75"}
            >
              {t("cta_secondary")}
            </Link>
          </m.div>
        </div>
      </div>
    </section>
  );
}
