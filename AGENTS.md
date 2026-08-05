# AGENTS.md

Entry point for AI assistants, coding agents, and automation tools working in
this repository.

## Project Intent

This repository contains a Gatsby-based personal portfolio site. The intended
product is a professional CV / portfolio website for a software engineer and
system architect, with long-term room for blog posts, case studies, open source
work, and consulting material.

Do not encode transient project status in this file. Infer the current stage
from the repository state, user direction, issues, or planning documents. If
the stage affects a decision and is unclear, ask before proceeding.

## Required AI Context

This file provides repository-specific operating context; the numbered rule
files in `.ai/rules/` define the detailed behavior contract. Before giving
architectural advice or changing files, read:

- `README.md` for repository purpose, stack, setup, and structure.
- Every file in `.ai/rules/`. These files are mandatory and
  complementary; each covers a distinct aspect of assistant behavior.

Do not treat `.ai/rules/` as optional reference material or use a subset as a
shortcut. If this file conflicts with a rule file, follow the rule file and
surface the discrepancy in the response. Request clarification when the
conflict cannot be resolved without a judgment call about project goals or
scope. If two rule files conflict, surface the conflict and request
clarification. Update this file only after explicit user direction.

## Coding Conventions

- Keep TypeScript strictly-compatible.
- Use React function components.
- Prefer existing project configuration over introducing new tools.
- Keep edits scoped to the requested task.
- Use Tailwind for styling the new UI unless the surrounding code clearly uses
  a different local pattern.
- Preserve Prettier settings (`prettier.config.ts` is the source of truth;
  it overrides any IDE or `.editorconfig` defaults for TypeScript/JavaScript):
    - double quotes (`singleQuote: false`)
    - no semicolons (`semi: false`) — Prettier will remove them on format even
      if an IDE inserts them
    - trailing commas (`trailingComma: "all"`)
    - `arrowParens: "always"`
    - `quoteProps: "consistent"` — object-literal keys follow the majority
      quoting style in the literal
    - Tailwind classes are auto-sorted by `prettier-plugin-tailwindcss`; do not
      manually reorder them
- Avoid unrelated formatting churn in files outside the requested change.

## Package Management

- Use pnpm for dependency installation and package scripts.
- Keep `pnpm-lock.yaml` aligned with `package.json` when dependencies change.
- Do not introduce Yarn lockfiles or Yarn commands.

## Design Direction

The website should support a credible personal brand for software engineering
and system architecture. Favor:

- clear information hierarchy
- restrained professional UI
- maintainable content structure
- accessibility and SEO basics
- performance-conscious static pages

Avoid marketing-heavy copy, decorative complexity without a purpose, and design
choices that make the portfolio harder to maintain.

## Change Workflow

1. Read `README.md`, `.ai/rules/*`, and the relevant project files.
2. Identify the current stage from the available context when giving broad
   guidance.
3. For ambiguous requests, decompose the problem and ask for the missing
   decision before implementing.
4. For explicit implementation or drafting requests, make the smallest coherent
   change that satisfies the request.
5. Run the most relevant verification command available.
6. Report what changed and any verification gaps.

### Verification Commands

- `pnpm run typecheck` for TypeScript changes.
- `pnpm run build` for production-build verification.
- `pnpm exec prettier --check .` for formatting verification.

Use `pnpm run build` as the general-purpose fallback when no more targeted
verification command applies.

For CI and deployment behavior, read `.github/workflows/`.

## Git Safety

- Do not revert or overwrite user changes unless explicitly requested.
- Check the worktree before broad edits.
- Do not commit unless the user asks.
- Do not run destructive commands without explicit approval.
