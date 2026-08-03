# PRD-v10: Animated Gradient Border (IUL Technologies Style)

## 1. Context & Objective
Project Name: Pranajaya Tech
Tech Stack: Next.js, TypeScript, Tailwind CSS.
**Objective:**
Implement a smooth, continuously rotating animated gradient border effect for the "Pranajaya Tech System Online" badge/logo component, mimicking the exact aesthetic seen in the IUL Technologies reference.

## 2. Technical Approach & Action Plan
The most performant way to achieve this "moving border" effect in Tailwind without heavy JS involves using a pseudo-element (`::before` or `::after`) with a conic-gradient that rotates continuously, masked by an inner container to create the illusion of a thin border.

### Task A: Extend Tailwind Config (`tailwind.config.ts`)
Add a custom animation and keyframes for the continuous rotation.
1. Add `keyframes`:
   ```javascript
   spin: {
     'from': { transform: 'rotate(0deg)' },
     'to': { transform: 'rotate(360deg)' },
   }
   ```
2. Add `animation`:
   ```javascript
   'spin-slow': 'spin 4s linear infinite',
   ```

### Task B: Component Implementation
1. **Locate Component:** Open the component rendering the `>_ Pranajaya Tech System Online` badge.
2. **Restructure HTML:** Wrap the text in a relative parent container with hidden overflow, and use an absolute pseudo-element for the animated gradient.
3. **Example Structure (Tailwind implementation):**
   - **Outer Wrapper:** `relative inline-flex h-full w-full overflow-hidden rounded-full p-[1px]`
   - **Animated Element (The Border):** `absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]` (Adjust colors to match the gold/orange theme from the images).
   - **Inner Content (The Background):** `inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl`
4. **Color Matching:** Ensure the gradient colors in the `conic-gradient` match the subtle orange/gold glow seen in the IUL Tech reference (`image_66e664.png`).

## 3. Verification Plan
1. Render the component in the browser.
2. Ensure the text `>_ Pranajaya Tech System Online` is perfectly centered on a dark background.
3. Verify that the thin border around the pill shape is continuously and smoothly rotating with a gradient effect.
4. Ensure no visual clipping or layout shifts occur during the animation.