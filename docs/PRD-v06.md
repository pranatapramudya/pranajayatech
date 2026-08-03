import os

content = """# PRD-v06: Deep Scroll Bottleneck Audit & 3D/Transform Cleanup

## 1. Context & Objective
Project Name: Pranajaya Tech
Tech Stack: Next.js, TypeScript, Tailwind CSS, Framer Motion (`LazyMotion`).
**Objective:** Despite previous optimizations, a subtle delay or sluggish pause still occurs during scrolling. The user suspects lingering 3D transforms, heavy layer compositions, or animation spring physics. This PRD mandates an exhaustive audit by the AI agent to locate and eliminate the remaining source of scroll latency.

## 2. Target Investigation Areas
* **Accidental 3D Transforms & Perspective:** Look for hidden `perspective`, `rotateX`, `rotateY`, `transformPerspective`, or heavy 3D matrix transformations that force expensive layer repainting on mobile/desktop GPUs.
* **Spring Physics vs. Deterministic Ease:** Heavy spring animations (`type: "spring"`) can introduce a delayed "rubber-band" or trailing effect that feels like lag. Convert these to crisp, instant ease curves.
* **Full `motion` vs `m` Component Leaks:** Check if any component accidentally imports `motion` instead of `m`, which breaks `LazyMotion` optimization and forces synchronous heavy bundle execution.
* **Intersection Observer / `whileInView` Debouncing:** Check if multiple sections triggering simultaneously lock the main thread.

## 3. Action Plan & Technical Tasks

### Task A: Purge Heavy 3D Transforms & Perspective
1. Grep the entire `src/` directory for `perspective`, `rotateX`, `rotateY`, `transformPerspective`, or `translateZ`.
2. Remove or flatten any unnecessary 3D depth effects on mobile viewports, as they trigger expensive software/hardware composite recalculations during scroll.

### Task B: Standardize to Instant, Snappy Transitions
1. Replace any remaining `type: "spring"` configurations in Framer Motion props with a snappy, non-spring timing profile: `transition={{ duration: 0.25, ease: "easeOut" }}`.
2. Remove any explicit high `delay` values on entrance animations (e.g., `delay: 0.2` or higher) so elements react immediately to the scroll position without a dead-time pause.

### Task C: Audit Component Imports (`motion` vs `m`)
1. Scan all files in `src/components/` to ensure no file imports `motion` from `"framer-motion"`. All components must exclusively use `import { m } from "framer-motion"`.

## 4. Verification Plan
1. Run `npm run build` to confirm zero compilation or type errors.
2. Test scrolling fluidity; animations must feel instantaneous, snappy, and tightly locked to the scrollbar movement with zero trailing delay.
"""

os.makedirs("docs", exist_ok=True)
file_path = "docs/PRD-v06.md"
with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print(f"File created successfully at {file_path}")