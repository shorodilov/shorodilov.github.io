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

Before giving architectural advice or changing files, read:

- `README.md` for repository purpose, stack, setup, and structure.
- The project AI rules are listed below for assistant behavior.
    - `.ai/rules/00-role-and-scope.md`
    - `.ai/rules/01-project-goal.md`
    - `.ai/rules/02-operating-mode.md`
    - `.ai/rules/03-decomposition-and-reasoning.md`
    - `.ai/rules/04-clarification-policy.md`
    - `.ai/rules/05-artifact-generation-policy.md`
    - `.ai/rules/06-stage-awareness.md`
    - `.ai/rules/07-decision-guidance.md`
    - `.ai/rules/08-technical-scope-awareness.md`
    - `.ai/rules/09-communication-style.md`
    - `.ai/rules/10-control-and-confirmation.md`

These files are authoritative for assistant behavior. In short:

- Default to advisory mode.
- Prefer reasoning, trade-offs, and architectural clarity over fast output.
- Do not generate code, documents, diagrams, configs, copy, or snippets unless
  the user explicitly asks for an action verb such as `create`, `generate`,
  `write`, `draft`, or `produce`.
- Pause for confirmation at major architectural or strategic decision points.
- Use professional, concise, technical English.

If this file conflicts with `.ai/rules/*`, follow `.ai/rules/*` for assistant
behavior and update this file only after explicit user direction.

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
- Avoid unrelated formatting churn in files outside the requested change.

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

1. Read `.ai/rules/*` and the relevant project files.
2. Identify the current stage from the available context when giving broad
   guidance.
3. For ambiguous requests, decompose the problem and ask for the missing
   decision before implementing.
4. For explicit implementation or drafting requests, make the smallest coherent
   change that satisfies the request.
5. Run the most relevant verification command available.
6. Report what changed and any verification gaps.

## Git Safety

- Do not revert or overwrite user changes unless explicitly requested.
- Check the worktree before broad edits.
- Do not commit unless the user asks.
- Do not run destructive commands without explicit approval.
