"use client";

import { useTranslations } from "next-intl";
import { Zap, Server, Smartphone } from "lucide-react";
import { m } from "framer-motion";

export default function Values() {
  const t = useTranslations("Values");

  const values = [
    {
      id: "speed",
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: t("speed_title"),
      description: t("speed_desc"),
    },
    {
      id: "architecture",
      icon: <Server className="w-6 h-6 text-blue-500" />,
      title: t("arch_title"),
      description: t("arch_desc"),
    },
    {
      id: "performance",
      icon: <Smartphone className="w-6 h-6 text-emerald-500" />,
      title: t("perf_title"),
      description: t("perf_desc"),
    }
  ];

  return (
    <section id="values" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* subtle gradient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none transform-gpu"></div>

      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((val) => (
            <m.div 
              key={val.id}
              className="bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-300 group transform-gpu"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
              style={{ willChange: "transform, opacity" }}
            >
              <div className="w-12 h-12 bg-slate-950 rounded-xl border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">{val.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {val.description}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
