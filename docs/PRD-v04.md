# PRD-v04: Ultimate Scroll & Mobile Performance Optimization (60fps Target)

## 1. Context & Objective
Project Name: Pranajaya Tech
Tech Stack: Next.js, TypeScript, Tailwind CSS, Framer Motion (`LazyMotion`).
**Objective:** Although initial bundle splitting and `LazyMotion` were successfully implemented, scrolling still exhibits noticeable lag, delay, and stuttering on both desktop and mobile devices. The goal of this PRD is to perform a deep performance audit focusing on CSS paint bottlenecks, mobile GPU constraints, and compositing layers to achieve absolute 60fps buttery-smooth scrolling.

## 2. Root Causes of Remaining Scroll Jank
* **Expensive Paint & Composite Operations:** Heavy CSS effects like `backdrop-blur`, complex multi-layered `box-shadow`s, and large animated gradients force the browser's GPU/CPU to constantly repaint during scrolling.
* **Mobile Hardware Limitations:** Mobile devices struggle with complex composite layers and simultaneous `whileInView` triggers.
* **Layout Thrashing via Sub-optimal Transforms:** Missing explicit hardware acceleration layers or conflicting transform properties.

## 3. Action Plan & Technical Tasks

### Task A: Audit & Strip Heavy Paint Effects (`backdrop-blur`, Shadows)
1. Inspect all layout containers, navbar, card components, and floating elements for `backdrop-blur-*` and heavy `box-shadow` styles.
2. Replace or conditionally disable `backdrop-blur` on mobile viewports or scrollable sections, as it is a notorious killer of mobile scroll performance. Use solid or high-opacity backgrounds instead.

### Task B: Mobile-Specific Animation Reduction & Optimization
1. Mobile CPUs and GPUs cannot handle heavy multi-element animations smoothly. Implement a media query check or lightweight conditional rendering for mobile viewports (`< 768px`).
2. For mobile devices, disable non-essential entrance animations or simplify them to a simple opacity fade (`opacity: 0 -> 1`), omitting complex scale or complex 3D transforms.

### Task C: Enforce Explicit GPU Layer Promotion
1. Ensure all elements wrapped in `m.div` or animated via Framer Motion have explicit GPU promotion hints:
   - Add `transform-gpu` or inline `transform: translateZ(0)` to prevent the browser from promoting layers dynamically on the fly during scroll.
   - Ensure `will-change: transform, opacity` is applied cleanly.

### Task D: Audit `whileInView` and Trigger Parameters
1. Verify that **every single** animated component uses `viewport={{ once: true }}` to completely disconnect the observer after the first execution. Continuous observer calculations waste CPU cycles on every scroll tick.
2. Ensure no layout properties (`width`, `height`, `padding`, `margin`, `top`, `left`) are animated anywhere in the codebase. Only `transform` and `opacity` are allowed.

## 4. Verification Plan
1. Test scrolling fluidity on both desktop Chrome/Safari and an actual mobile device or browser mobile emulation mode.
2. Verify that FPS remains stable at 60fps during rapid scrolling through `Values`, `Portfolio`, and `Pricing` sections.
3. Run `npm run build` to ensure zero compilation errors.