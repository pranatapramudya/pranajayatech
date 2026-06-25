"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink, Code2, LineChart, HeartPulse, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const MotionCard = motion.create(Card);

export function Portfolio() {
  const t = useTranslations("Portfolio");

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-8 max-w-5xl mx-auto">
          {[
            {
              id: "lumestack",
              icon: <Code2 className="h-6 w-6 text-primary" />,
              iconBg: "bg-primary/10 border-primary/20",
              gradient: "from-primary",
              accentText: "text-primary",
            },
            {
              id: "predator",
              icon: <LineChart className="h-6 w-6 text-blue-500" />,
              iconBg: "bg-blue-500/10 border-blue-500/20",
              gradient: "from-blue-500",
              accentText: "text-blue-400",
            },
            {
              id: "sadulur",
              icon: <HeartPulse className="h-6 w-6 text-orange-500" />,
              iconBg: "bg-orange-500/10 border-orange-500/20",
              gradient: "from-orange-500",
              accentText: "text-orange-400",
            },
            {
              id: "kkf",
              icon: <ShoppingBag className="h-6 w-6 text-pink-500" />,
              iconBg: "bg-pink-500/10 border-pink-500/20",
              gradient: "from-pink-500",
              accentText: "text-pink-400",
            }
          ].map((project) => (
            <MotionCard 
              key={project.id} 
              className="bg-slate-900/40 backdrop-blur-xl border border-white/10 transition-colors flex flex-col h-full overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} to-transparent opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              <CardHeader className="p-4 sm:p-6 pb-2 sm:pb-6">
                <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-lg ${project.iconBg} flex items-center justify-center mb-2 sm:mb-4 border`}>
                  {project.icon}
                </div>
                <CardTitle className="text-lg sm:text-2xl">{t(`${project.id}_title` as Parameters<typeof t>[0])}</CardTitle>
                <CardDescription className="text-xs sm:text-base mt-1 sm:mt-2 line-clamp-2">
                  {t(`${project.id}_description` as Parameters<typeof t>[0])}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-2 sm:space-y-4 text-[10px] sm:text-sm text-zinc-400 p-4 sm:p-6 pt-0 sm:pt-0">
                <div className="p-2 sm:p-4 rounded-md bg-zinc-900/50 border border-zinc-800/50">
                  <p className="font-medium text-zinc-300">{t(`${project.id}_problem` as Parameters<typeof t>[0]).split(':')[0]}:</p>
                  <p className="line-clamp-2 sm:line-clamp-none">{t(`${project.id}_problem` as Parameters<typeof t>[0]).split(':')[1]}</p>
                </div>
                <div className="p-2 sm:p-4 rounded-md bg-zinc-900/50 border border-zinc-800/50">
                  <p className="font-medium text-zinc-300">{t(`${project.id}_arch` as Parameters<typeof t>[0]).split(':')[0]}:</p>
                  <p className="line-clamp-2 sm:line-clamp-none">{t(`${project.id}_arch` as Parameters<typeof t>[0]).split(':')[1]}</p>
                </div>
                <div className="p-2 sm:p-4 rounded-md bg-zinc-900/50 border border-zinc-800/50">
                  <p className={`font-medium ${project.accentText}`}>{t(`${project.id}_results` as Parameters<typeof t>[0]).split(':')[0]}:</p>
                  <p className="text-zinc-300 line-clamp-2 sm:line-clamp-none">{t(`${project.id}_results` as Parameters<typeof t>[0]).split(':')[1]}</p>
                </div>
              </CardContent>
              <CardFooter className="pt-2 sm:pt-6 p-4 sm:p-6">
                <a 
                  href={t(`${project.id}_link` as Parameters<typeof t>[0])} 
                  target="_blank" 
                  rel="noreferrer"
                  className={buttonVariants({ variant: "outline", size: "sm" }) + " w-full group text-xs sm:text-sm h-8 sm:h-10"}
                >
                  {t(`${project.id}_cta` as Parameters<typeof t>[0])}
                  <ExternalLink className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 opacity-70 group-hover:opacity-100" />
                </a>
              </CardFooter>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
