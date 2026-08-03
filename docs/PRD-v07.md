import os

content = """# PRD-v07: Form Internationalization (i18n) & Container Background Removal

## 1. Context & Objective
Project Name: Pranajaya Tech
Tech Stack: Next.js, TypeScript, Tailwind CSS, `next-intl`.
**Objective:** 
1. Fix form labels and placeholders in the booking/contact section so they dynamically translate when switching between English (`en`) and Indonesian (`id`) using `next-intl`.
2. Remove the outer card background container/border wrapping the form inputs so the form blends seamlessly into the section background (making it clean and borderless).

## 2. Action Plan & Technical Tasks

### Task A: Localize Form Labels & Placeholders via `next-intl`
1. **Update Translation Files (`messages/en.json` & `messages/id.json`):**
   - Add localized keys for form elements under a `Booking` or `Contact` namespace:
     - `nameLabel`, `namePlaceholder`
     - `companyLabel`, `companyPlaceholder`
     - `phoneLabel`, `phonePlaceholder`
     - `emailLabel`, `emailPlaceholder`
     - `messageLabel`, `messagePlaceholder`
     - `sendButton`
2. **Update Component (`Booking.tsx` or Contact Form Component):**
   - Import and invoke `useTranslations('Booking')` (or the respective namespace).
   - Replace hardcoded English strings (`"Your Name"`, `"Company"`, `"Phone Number"`, `"Email"`, `"Project Details"`, `"Send"`) with translation function calls (`t('nameLabel')`, etc.).

### Task B: Remove Form Card Background & Border Container
1. **Inspect Form Container Wrapper:** Locate the outer container div enclosing the form inputs (visible in the screenshot as a dark rounded card with a distinct border).
2. **Strip Styling Classes:** Remove background color classes (e.g., `bg-slate-900/x` or similar card backgrounds), heavy borders (`border`), and card shadows (`shadow-xl`) from the wrapper element.
3. **Seamless Integration:** Allow the input fields themselves to sit directly on the section's base background for a clean, modern, borderless look.

## 3. Verification Plan
1. Toggle the language switcher between English (`EN`) and Indonesian (`ID`) and verify that all form labels, placeholders, and button texts update instantly and accurately.
2. Verify visual layout in mobile and desktop viewports to ensure the form container background is completely gone and looks clean.
3. Run `npm run build` to confirm zero compilation or TypeScript errors.
"""

os.makedirs("docs", exist_ok=True)
file_path = "docs/PRD-v07.md"
with open(file_path, "w", encoding="utf-z8" if False else "utf-8") as f:
    f.write(content)

print(f"File created successfully at {file_path}")