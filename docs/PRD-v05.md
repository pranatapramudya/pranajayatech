# PRD-v05: Scroll Transition Fine-Tuning & Mobile CTA Layout Fix

## 1. Context & Objective
Project Name: Pranajaya Tech
Tech Stack: Next.js, TypeScript, Tailwind CSS, Framer Motion (`LazyMotion`).
**Objective:** 
1. Eliminate the remaining scroll delay/sluggish transition feeling (making animations snappy and immediate rather than dragging).
2. Fix the mobile layout of the hero call-to-action (CTA) buttons ("Book a Consultation" and "View Portfolio") as seen in mobile viewports: they currently stretch awkwardly, have inconsistent widths/spacing, and lack proper center alignment.

## 2. Action Plan & Technical Tasks

### Task A: Eliminate Scroll Transition Delay & Sluggishness
1. **Audit Framer Motion Durations & Delays:** Inspect all section components (`Hero.tsx`, `Values.tsx`, `Portfolio.tsx`, `Pricing.tsx`). Look for high duration values (`duration > 0.6`) or explicit `delay` properties that create a noticeable pause before elements animate in.
2. **Snappy Transition Profile:** Change transition configs to snappy, lightweight profiles:
   - Use `transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}` (swift ease-out) instead of heavy spring physics or long durations.
3. **Viewport Margin Tuning:** Adjust `viewport={{ once: true, margin: "100px" }}` so triggers happen right before the user reaches them, removing any perceived dead-time or lag.

### Task B: Mobile CTA Buttons Layout & Alignment Correction (`Hero.tsx`)
1. **Container Alignment:** Inspect the CTA container in `Hero.tsx`. Ensure it uses a centered column layout on mobile: `flex flex-col items-center justify-center w-full gap-3 px-4`.
2. **Uniform Button Sizing & Proportions:** 
   - Force both buttons ("Book a Consultation" and "View Portfolio") to share a consistent, controlled width on mobile (e.g., `w-full max-w-sm sm:w-auto`) instead of letting one stretch full-width while the other hugs content.
3. **Spacing Reduction:** Reduce excessive vertical padding or gaps between the descriptive subtitle text and the buttons on mobile (`mt-6` instead of larger margins) so everything is tightly integrated and visually centered.

## 3. Verification Plan
1. Test scrolling speed and responsiveness; animations must trigger instantly without a sluggish "laggy" delay.
2. Test mobile view (iPhone/Android emulation) to verify that both CTA buttons are perfectly centered, neatly stacked with balanced spacing, and look balanced.
3. Run `npm run build` to verify zero build or TypeScript errors.