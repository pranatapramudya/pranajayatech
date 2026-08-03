import os

content = """# PRD-v09: Form Input Text & Placeholder Contrast Fix

## 1. Context & Objective
Project Name: Pranajaya Tech
Tech Stack: Next.js, TypeScript, Tailwind CSS.
**Objective:** 
Improve the accessibility and readability of the contact/booking form inputs. Currently, the placeholder text and input text are rendering too dark against the dark background of the form fields, making them difficult to read. 

## 2. Action Plan & Technical Tasks

### Task A: Update Tailwind CSS Classes for Inputs and Textareas
1. **Locate the Form Component:** Open the component rendering the form (e.g., `Booking.tsx` or `ContactForm.tsx`).
2. **Adjust Text Color:** Add the `text-white` or `text-slate-100` class to all `<input>` and `<textarea>` elements so that the text typed by the user is bright and legible.
3. **Adjust Placeholder Color:** Add a custom placeholder color class like `placeholder:text-slate-400` or `placeholder:text-gray-300` to all `<input>` and `<textarea>` elements so the placeholder text ("Budi Santoso", "PT Maju Mundur", etc.) is easily visible before typing.

## 3. Verification Plan
1. Check the form in the browser. 
2. Verify that the placeholder text is clearly visible without squinting.
3. Type into the fields and verify that the active text is bright white and legible.
4. Ensure no regression on the borderless container design implemented in PRD-v07.
"""

os.makedirs("docs", exist_ok=True)
file_path = "docs/PRD-v09.md"
with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print(f"File created successfully at {file_path}")