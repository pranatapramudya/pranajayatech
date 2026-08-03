import os

content = """# PRD-v08: Smart Locale & Browser Language Auto-Detection

## 1. Context & Objective
Project Name: Pranajaya Tech
Tech Stack: Next.js, TypeScript, Tailwind CSS, `next-intl`.
**Objective:** Configure the `next-intl` middleware and routing logic to intelligently auto-detect the visitor's preferred language:
- Automatically route local visitors (Indonesian browser preference / IP context) to Bahasa Indonesia (`/id`).
- Automatically route international clients and general global visitors to English (`/en`) as the primary fallback.
- Preserve the manual language toggle (`EN / ID`) in the navigation bar for manual overrides.

## 2. Action Plan & Technical Tasks

### Task A: Update `next-intl` Middleware Configuration (`src/middleware.ts`)
1. **Configure Locale Detection:** Ensure `createMiddleware` from `next-intl` utilizes built-in header negotiation (`Accept-Language`) or custom logic to prioritize `id` for Indonesian-speaking browsers and default to `en` for global traffic.
2. **Path Matcher Check:** Ensure localized prefixes are cleanly applied without creating redirect loops for static assets or API endpoints (`_next`, `_vercel`, etc.).

### Task B: Persistent Manual Language Switcher
1. **Cookie/Storage Sync:** Ensure that when a user clicks the manual `EN / ID` toggle, the choice is saved in a cookie (recognized by `next-intl`) so subsequent page loads respect their manual choice over browser defaults.

## 3. Verification Plan
1. Test with browser language set to Indonesian (`id`) to confirm automatic redirection to `/id`.
2. Test with browser language set to English (`en`) or another language to confirm fallback to `/en`.
3. Verify that the manual switcher in the header successfully updates the language and persists across pages.
4. Run `npm run build` to confirm zero compilation or TypeScript errors.
"""

os.makedirs("docs", exist_ok=True)
file_path = "docs/PRD-v08.md"
with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print(f"File created successfully at {file_path}")