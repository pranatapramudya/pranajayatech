# PRD-v02: Scroll Performance & Animation Optimization

## 1. Context & Objective
Project Name: Pranajaya Tech
Tech Stack: Next.js, TypeScript, Tailwind CSS, Prisma.
**Objective:** The website currently features scroll-triggered animations (fade-ins, slide-ups, parallax, etc.) that are causing noticeable lag, delay, and frame drops (jank) when the user scrolls down the page. The goal is to refactor and optimize these animations to achieve buttery-smooth 60fps scrolling without sacrificing the visual aesthetics.

## 2. Problem Symptoms
* Noticeable delay between the user's scroll action and the animation triggering.
* The browser struggles to maintain a smooth framerate (stuttering) when scrolling past sections with heavy animations.
* Potential layout thrashing or main-thread blocking during scroll events.

## 3. Diagnosis Directives for the AI Agent
Before changing any code, please analyze the `src/` directory (specifically `src/components/sections` and layout files) for the following common performance bottlenecks:
* **Heavy Scroll Event Listeners:** Are there any `window.addEventListener('scroll', ...)` that are not debounced or throttled? Are they causing excessive React state updates?
* **Non-Accelerated Animations:** Are animations manipulating layout properties (e.g., `margin`, `top`, `height`) instead of GPU-accelerated properties (`transform`, `opacity`)?
* **Improper Animation Library Usage:** If using Framer Motion, are we using `layout` props unnecessarily? Are we missing `will-change` hints for heavy animated components?
* **Intersection Observer Issues:** Are components mounting/unmounting excessively upon scrolling into view instead of just toggling visibility/opacity classes?

## 4. Action Plan & Optimization Tasks

### Task A: Refactor Animation Logic
1. Ensure all scroll-based animations ONLY animate `transform` (translate, scale) and `opacity`. Strictly avoid animating CSS properties that trigger layout recalculations.
2. If using Framer Motion, utilize `whileInView` with `viewport={{ once: true, margin: "-50px" }}` to prevent continuous state calculations after the element has appeared.
3. If using vanilla CSS/Tailwind with Intersection Observers, ensure the observer callback uses `requestAnimationFrame` or only adds a CSS class without triggering heavy React state changes.

### Task B: State & Re-render Optimization
1. Remove any scroll-bound React state (`useState` tied to scroll position) unless absolutely necessary.
2. If scroll position is needed for effects like a dynamic Navbar or Parallax, use `useScroll` and `useTransform` from Framer Motion (which runs off the React render cycle) instead of native state.

### Task C: DOM & Asset Offloading
1. Ensure components heavy with images or complex DOM structures below the fold are properly lazy-loaded (`next/dynamic`) or use the `loading="lazy"` attribute on native elements.
2. Apply `will-change: transform, opacity;` to the CSS of the specific parent containers that hold the animated elements, but use it sparingly to avoid consuming too much GPU memory.

## 5. Verification
After applying the fixes, ensure that:
1. The project successfully builds (`npm run build`).
2. The visual appearance and timing of the effects remain identical or better than the original.
3. The scrolling experience is perfectly smooth.