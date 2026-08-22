import Link from "next/link";
import { Mail, ExternalLink } from "lucide-react";

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.5 7.1c0-1.7 1.3-3 2.9-3h13.2c1.6 0 2.9 1.3 2.9 3v9.8c0 1.7-1.3 3-2.9 3H5.4c-1.6 0-2.9-1.3-2.9-3V7.1z" />
    <path d="m10 15 5-3-5-3v6z" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-background/50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12">
          
          {/* Brand & Description */}
          <div className="space-y-4 max-w-2xl">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              PranajayaTech
            </h3>
            <p className="text-slate-400 max-w-xs text-sm leading-relaxed">
              Empowering businesses through cutting-edge technology. We build modern, scalable, and beautiful digital solutions.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="mailto:pranajayatech@gmail.com"
                className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@pranajayatech?si=C4fvlImcOrQWUbXX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-red-500 hover:scale-110 transition-all duration-300"
                aria-label="YouTube"
              >
                <YoutubeIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/pranajayatech?igsi=MWk2MDk4dDQ3MGN1Zw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-pink-500 hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@pranajayatech?_r=1&_t=ZS-995LJcQS1WH"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/19BP7HnqXg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>


        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} PranajayaTech. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
