import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'id'],
  defaultLocale: 'en',
  localeDetection: true,
  localePrefix: 'always'
});

export const config = {
  // Matcher yang kompatibel dengan Vercel Edge untuk next-intl
  matcher: ['/', '/(id|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
