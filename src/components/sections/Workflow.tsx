import { useTranslations } from "next-intl";
import { MessageSquare, Handshake, Code2, TestTube, Rocket } from "lucide-react";

export default function Workflow() {
  const t = useTranslations("Workflow");

  const steps = [
    {
      id: "step1",
      icon: <MessageSquare className="h-5 w-5 text-blue-400" />,
      color: "border-blue-500/30 bg-blue-500/10",
      glow: "shadow-[0_0_15px_rgba(59,130,246,0.3)]",
    },
    {
      id: "step2",
      icon: <Handshake className="h-5 w-5 text-indigo-400" />,
      color: "border-indigo-500/30 bg-indigo-500/10",
      glow: "shadow-[0_0_15px_rgba(99,102,241,0.3)]",
    },
    {
      id: "step3",
      icon: <Code2 className="h-5 w-5 text-purple-400" />,
      color: "border-purple-500/30 bg-purple-500/10",
      glow: "shadow-[0_0_15px_rgba(168,85,247,0.3)]",
    },
    {
      id: "step4",
      icon: <TestTube className="h-5 w-5 text-pink-400" />,
      color: "border-pink-500/30 bg-pink-500/10",
      glow: "shadow-[0_0_15px_rgba(236,72,153,0.3)]",
    },
    {
      id: "step5",
      icon: <Rocket className="h-5 w-5 text-emerald-400" />,
      color: "border-emerald-500/30 bg-emerald-500/10",
      glow: "shadow-[0_0_15px_rgba(16,185,129,0.3)]",
    },
  ];

  return (
    <section id="workflow" className="py-24 sm:py-32 bg-zinc-950 relative overflow-hidden" style={{ contain: "paint layout" }}>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-24">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12 sm:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.id} className="relative flex flex-col md:flex-row items-start md:items-center">
                  
                  {/* Timeline Dot (Mobile: left, Desktop: center) */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className={`h-12 w-12 rounded-full border flex items-center justify-center backdrop-blur-sm z-10 ${step.color} ${step.glow}`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className={`w-full pl-20 pr-4 md:px-0 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto md:text-left'}`}>
                    <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 sm:p-8 hover:bg-slate-800/50 transition-colors duration-300">
                      <span className="text-sm font-bold tracking-wider text-muted-foreground uppercase mb-2 block">
                        Step 0{index + 1}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                        {t(`${step.id}_title` as Parameters<typeof t>[0])}
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                        {t(`${step.id}_desc` as Parameters<typeof t>[0])}
                      </p>
                    </div>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
