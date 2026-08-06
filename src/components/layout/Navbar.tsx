"use client";

import { useState, useEffect, startTransition } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, FolderOpen, Layers, CreditCard, Home, Activity } from "lucide-react";
import { useParams } from "next/navigation";

export function Navbar() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLocale = () => {
    startTransition(() => {
      const newLocale = locale === "en" ? "id" : "en";
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
      router.replace(pathname, { locale: newLocale });
    });
  };

  const closeMenu = () => setIsOpen(false);

  const handleHomeClick = (e: React.MouseEvent) => {
    if (window.location.pathname === '/' || window.location.pathname === '/en' || window.location.pathname === '/id') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 transform-gpu ${
      isScrolled 
        ? "border-border/40 bg-background/95 md:backdrop-blur md:supports-[backdrop-filter]:bg-background/60" 
        : "border-transparent bg-transparent"
    }`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2" onClick={handleHomeClick} prefetch={false}>
            <span className="font-bold text-xl tracking-tighter text-primary">
              Pranajaya<span className="text-foreground">Tech</span>
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground" onClick={handleHomeClick} prefetch={false}>
            {t("home")}
          </Link>
          <Link href="#values" className="transition-colors hover:text-foreground" prefetch={false}>
            {t("values")}
          </Link>
          <Link href="#portfolio" className="transition-colors hover:text-foreground" prefetch={false}>
            {t("portfolio")}
          </Link>
          <Link href="#workflow" className="transition-colors hover:text-foreground" prefetch={false}>
            {t("workflow")}
          </Link>
          <Link href="#pricing" className="transition-colors hover:text-foreground" prefetch={false}>
            {t("pricing")}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Link 
              href="#contact" 
              prefetch={false}
              className={buttonVariants({ variant: "outline", size: "sm" }) + " border-primary/20 hover:border-primary/50 text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)]"}
            >
              {t("book")}
            </Link>
          </div>

          <button 
            onClick={toggleLocale}
            onMouseEnter={() => router.prefetch(pathname, { locale: locale === "en" ? "id" : "en" })}
            onPointerDown={() => router.prefetch(pathname, { locale: locale === "en" ? "id" : "en" })}
            className="text-xs sm:text-sm font-semibold tracking-wider text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 bg-zinc-900/50 px-2 sm:px-3 py-1.5 rounded-md border border-zinc-800 transform-gpu"
            style={{ willChange: "transform, opacity" }}
          >
            <span className={locale === 'en' ? "text-primary" : ""}>EN</span>
            <span className="opacity-50">/</span>
            <span className={locale === 'id' ? "text-primary" : ""}>ID</span>
          </button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden h-9 w-9" />}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0B0F19] border-l border-white/5 overflow-y-auto sm:max-w-[320px] w-[85vw] flex flex-col h-full p-6">
              <SheetHeader className="text-left mb-8">
                <SheetTitle className="font-bold text-xl tracking-tight text-white">
                  Pranajaya<span className="text-blue-500">Tech</span>
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex flex-col gap-2 mb-8">
                <Link href="/" onClick={handleHomeClick} prefetch={false} className="flex items-center gap-3 py-3 px-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200">
                  <Home className="w-5 h-5" />
                  <span className="font-medium text-base">{t("home")}</span>
                </Link>
                <Link href="#values" onClick={closeMenu} prefetch={false} className="flex items-center gap-3 py-3 px-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200">
                  <Layers className="w-5 h-5" />
                  <span className="font-medium text-base">{t("values")}</span>
                </Link>
                <Link href="#portfolio" onClick={closeMenu} prefetch={false} className="flex items-center gap-3 py-3 px-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200">
                  <FolderOpen className="w-5 h-5" />
                  <span className="font-medium text-base">{t("portfolio")}</span>
                </Link>
                <Link href="#workflow" onClick={closeMenu} prefetch={false} className="flex items-center gap-3 py-3 px-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200">
                  <Activity className="w-5 h-5" />
                  <span className="font-medium text-base">{t("workflow")}</span>
                </Link>
                <Link href="#pricing" onClick={closeMenu} prefetch={false} className="flex items-center gap-3 py-3 px-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200">
                  <CreditCard className="w-5 h-5" />
                  <span className="font-medium text-base">{t("pricing")}</span>
                </Link>
              </div>
              
              {/* Value Proposition Section in Sidebar */}
              <div className="flex flex-col mb-8">
                <h4 className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-4">{t("sidebar_value_title")}</h4>
                
                <div className="flex flex-col gap-3">
                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 backdrop-blur-sm hover:border-blue-500/30 transition-colors cursor-pointer">
                    <h5 className="text-blue-400 font-medium text-sm mb-1">{t("sidebar_lp_title")}</h5>
                    <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                      {t("sidebar_lp_desc")}
                    </p>
                  </div>

                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 backdrop-blur-sm hover:border-blue-500/30 transition-colors cursor-pointer">
                    <h5 className="text-blue-400 font-medium text-sm mb-1">{t("sidebar_apk_title")}</h5>
                    <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                      {t("sidebar_apk_desc")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-4">
                <Link 
                  href="#contact" 
                  onClick={closeMenu}
                  prefetch={false}
                  className="flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)]"
                >
                  {t("book")}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
