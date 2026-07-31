# PRD: Rebranding & Folder Restructuring (Lumea Labs -> Pranajaya Tech)

## 1. Context & Objective
We are completely rebranding this Next.js project from "Lumea Labs" to "Pranajaya Tech". Your task as an AI Coding Agent is to execute a clean, comprehensive "Find and Replace" across the entire codebase and ensure the documentation structure is properly updated.

## 2. Tasks to Execute

### Task A: Documentation Restructuring
1. We have created a `docs` folder at the root level.
2. The `PRD.md` has been moved to `docs/PRD.md`. 
3. Please read `docs/PRD.md` to understand the core project. If the file is empty, initialize it with the new project title: `# Pranajaya Tech - Project Requirements`.
4. (Optional but recommended) Move `AGENTS.md` to the `docs/` folder as well, and update any internal links if necessary, leaving `CLAUDE.md` at the root.

### Task B: Global Find & Replace (The Rebranding)
Perform a global search and replace across the codebase (specifically targeting the `src`, `messages`, `public`, and configuration files like `package.json`). 

Apply the following case-sensitive replacements:
- `"Lumea Labs"` -> `"Pranajaya Tech"`
- `"lumea-labs"` -> `"pranajaya-tech"`
- `"lumealabs"` -> `"pranajayatech"`
- `"LumeaLabs"` -> `"PranajayaTech"`

### Task C: Specific File Verification
Please ensure you specifically check and update these critical areas:
1. **`package.json`**: Update the `"name"` field to `"pranajaya-tech"`.
2. **Metadata/SEO (`src/app/layout.tsx` or `src/app/page.tsx`)**: Update the `title`, `description`, and `openGraph` tags to reflect "Pranajaya Tech".
3. **i18n Dictionaries (`messages/` folder)**: Update any hardcoded strings representing the brand name in all language JSON files.
4. **Environment Variables**: Check if `.env.example` has any dummy URLs containing `lumealabs` and update them.

## 3. Guardrails (Strict Rules)
- DO NOT modify the `prisma` folder schemas or database connection logic unless a model specifically contained the old brand name (highly unlikely).
- DO NOT break any imports. If you rename any internal components or files (e.g., `LumeaLogo.tsx` to `PranajayaLogo.tsx`), you MUST update all corresponding import statements across the `src` folder.
- Execute this step-by-step and ask for my confirmation if you encounter any ambiguous naming conflicts.