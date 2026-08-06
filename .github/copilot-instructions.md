# Copilot Instructions for CV Website

## Required Reading

`AGENTS.md` is the primary mandatory entry point for all AI agents, including
Copilot. Read it before giving architectural advice or changing files.

Then read every file in `.ai/rules/`. The rules are mandatory and
complementary; they cover individual aspects of assistant behavior and must be
applied together.

## Repository Sources

Use the following project documents as their designated sources of truth:

- `README.md`: project purpose, setup, and structure.
- `package.json`: dependencies, package manager, and available scripts.
- `prettier.config.ts`: TypeScript and JavaScript formatting configuration.
- `tailwind.config.js`: Tailwind content discovery and theme configuration.
- `postcss.config.js`: PostCSS plugin configuration.
- `.editorconfig`: general editor conventions and file-specific settings.
- `.github/workflows/`: CI and deployment behavior.
- `src/`: current application source layout; inspect its directories rather
  than assuming a component structure.

This file intentionally does not repeat repository rules or operational facts.
Consult the sources above so the instructions remain current.

Configuration files are authoritative for the tools they configure. If any
Markdown instruction conflicts with an applicable `*.config.*` file, follow
the configuration and correct the stale Markdown guidance.
