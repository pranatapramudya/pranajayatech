# PRD: Vercel Absolute 404 Deep Dive & Fix

## 1. Issue Overview
* **Symptom:** Absolute Vercel 404 page (from Vercel infrastructure, not a Next.js 404). Occurs despite a "successful" green build.
* **Diagnosis:** The `next build` command is either not producing any pages, is exporting to a directory Vercel isn't serving, or `next-intl` dynamic routing is failing silently during the build step causing an empty route tree.

## 2. Resolution Directives
* **`package.json` Audit:** Force `"build": "next build"`. Remove any static export flags.
* **Directory Conflict Scan:** Search for duplicate `app` or `src` folders.
* **i18n Verification:** Ensure `i18n.ts` exists and is properly configured for the Server environment.