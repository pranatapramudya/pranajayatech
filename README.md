This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Performance & Mobile Optimizations

Recent production improvements have been made to achieve solid 60fps scrolling and instant responsiveness, particularly on mobile viewports:

- **Paint Bottleneck Removal:** Stripped heavy `backdrop-blur` and multi-layered glow effects on mobile viewports to prevent composite layer thrashing and achieve fluid 60fps scrolling performance.
- **Snappy Transitions:** Standardized all Framer Motion entrance animations to an instantaneous `duration: 0.25, ease: "easeOut"` profile with zero micro-delays for true instant responsiveness as you scroll.
- **Mobile UI Fixes:** Fixed the mobile Hero CTA button layouts ("Book a Consultation" and "View Portfolio") to be perfectly centered, uniformly proportioned, and neatly stacked to prevent awkward width stretching.
- **GPU Acceleration:** Enforced explicit GPU layer promotion (`transform-gpu`, `will-change: transform, opacity`) across all animated components to offload heavy calculations to the graphics processor before scroll occurs.

## Localization & Internationalization (i18n)

We have implemented a robust localization system using `next-intl` to serve both local and global audiences seamlessly:

- **Smart Locale Auto-Detection:** Configured `next-intl` middleware with `localeDetection: true` and `localePrefix: 'always'` to automatically route Indonesian browser preferences/traffic to `/id` and global/international traffic to `/en`.
- **Persistent Manual Language Switcher:** Added a 1-year cookie persistence (`NEXT_LOCALE`) via the navigation toggle to remember manual user preferences across visits, ensuring their language choice is respected on all subsequent page loads.
