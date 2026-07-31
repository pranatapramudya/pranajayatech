# PRD-v03: Advanced Framer Motion & Hydration Optimization

## 1. Context & Diagnosis
The previous implementation of `next/dynamic` resolved the bundle size issue, but introduced a new bottleneck: **Main-thread choking during scroll and hydration**.
1. **Initial Load Lag:** React Hydration is fighting with Framer Motion's synchronous initial calculations in the Hero section.
2. **Scroll Jank:** Fetching the dynamic chunk + rendering React + calculating Framer Motion's `whileInView` all at the exact moment of scrolling into view causes severe frame drops.

## 2. Action Plan

### Task A: Implement `LazyMotion` (Framer Motion JS Reduction)
To fix the initial load delay, we must drastically reduce Framer Motion's upfront bundle execution.
1. Create a client-side provider or update the main layout to wrap the application with `<LazyMotion features={domAnimation}>`.
2. Across **all** animated components (`Hero`, `Values`, `Portfolio`, `Pricing`, `Booking`), replace standard `motion.div` or `motion.h1` elements with `m.div` and `m.h1` from `framer-motion`.

### Task B: Optimize Initial Load (Hero Section)
1. Check the `Hero` component. Ensure any `<Image />` tags from `next/image` have the `priority={true}` attribute to prevent LCP (Largest Contentful Paint) blocking.
2. Ensure `will-change-transform` is applied via Tailwind (`will-change-transform`) to the animated elements in the Hero section so the GPU prepares them before the JS executes.

### Task C: Fix Scroll Jank (Dynamic Loading Skeletons & Viewport)
1. In `page.tsx`, update the dynamic imports to include a lightweight React loading skeleton. This prevents the UI thread from freezing while fetching the JS chunks during a scroll event.
   *Example:*
   `const Values = dynamic(() => import('@/components/sections/Values'), { loading: () => <div className="h-screen w-full animate-pulse bg-gray-50/5" /> });`
   *(Apply this loading configuration to all dynamic imports).*
2. In the component files (`Values`, `Portfolio`, etc.), adjust the Framer Motion viewport trigger so it prepares the animation slightly *before* it enters the screen. 
   *Change `viewport={{ once: true }}` to `viewport={{ once: true, margin: "200px" }}`*.

## 3. Execution Directives
Execute these changes step-by-step. Prioritize converting `motion` to `m` with `LazyMotion` as it is the most critical fix for the initial load delay. Confirm once all files are updated.