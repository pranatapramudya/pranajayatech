"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useState, useTransition } from "react";
import { submitLead } from "@/actions/submit-lead";
import { Turnstile } from '@marsidev/react-turnstile';

export default function Booking() {
  const t = useTranslations("Booking");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [turnstileKey, setTurnstileKey] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!token) {
      setError("Please complete the security check.");
      return;
    }
    const formData = new FormData(e.currentTarget);
    formData.append("turnstileToken", token);
    setError(null);
    setSuccess(false);
    setIsLoading(true);

    try {
      const res = await submitLead(formData);
      if (res.success) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
        setToken(null);
        setTurnstileKey(prev => prev + 1);
      } else {
        setError(res.error || "An error occurred");
      }
    } catch (err: any) {
      setError(err?.message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-background overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl hidden md:block pointer-events-none transform-gpu"></div>
      
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative overflow-hidden">
          {success && (
            <div className="absolute inset-0 bg-slate-900/95 md:backdrop-blur-md z-20 flex flex-col items-center justify-center text-center p-8">
              <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
              <p className="text-slate-300 max-w-md">
                Thank you for reaching out. Our team will review your project details and contact you within 24 hours.
              </p>
              <button 
                onClick={() => setSuccess(false)}
                className="mt-8 text-blue-500 hover:text-blue-400 font-medium transition-colors"
              >
                Submit another request
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-500 rounded-xl p-4 text-sm font-medium">
                {error}
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-slate-300 mb-2 block">{t("nameLabel")}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  placeholder={t("namePlaceholder")} 
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="text-sm font-medium text-slate-300 mb-2 block">{t("companyLabel")}</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company"
                  placeholder={t("companyPlaceholder")} 
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-slate-300 mb-2 block">{t("phoneLabel")}</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  placeholder={t("phonePlaceholder")} 
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-slate-300 mb-2 block">{t("emailLabel")}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder={t("emailPlaceholder")} 
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="details" className="text-sm font-medium text-slate-300 mb-2 block">{t("messageLabel")}</label>
              <textarea 
                id="details" 
                name="projectDetails"
                rows={4} 
                placeholder={t("messagePlaceholder")} 
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-y"
                required
              ></textarea>
            </div>

            <div className="flex justify-center mt-6">
              {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ? (
                <Turnstile key={turnstileKey} siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} onSuccess={setToken} />
              ) : (
                <div className="text-amber-500 bg-amber-500/10 border border-amber-500/50 p-4 rounded-xl text-sm">
                  Turnstile security key is missing. Form submission disabled.
                </div>
              )}
            </div>

            <button 
              type="submit" 
              disabled={isLoading || !token}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] flex items-center justify-center gap-2 mt-8 mx-auto disabled:opacity-70 disabled:cursor-not-allowed border-0"
            >
              {isLoading ? t("processing") : (
                <>{t("sendButton")} <ArrowUpRight className="w-5 h-5" /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
