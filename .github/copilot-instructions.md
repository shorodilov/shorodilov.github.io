# Copilot Instructions for CV Website

## Sources of truth

Do not duplicate configuration values in this document. Read the relevant
configuration file before making assumptions, and update this document only
when workflow guidance changes.

- `package.json` defines the package manager, scripts, and dependencies.
- `pnpm-lock.yaml` locks dependency versions.
- `tsconfig.json` defines the TypeScript compiler options and included files.
- `prettier.config.ts` defines formatting, including quote and semicolon style.
- `gatsby-config.ts` defines Gatsby metadata and plugins.
- `postcss.config.ts` and `tailwind.config.ts` define the styling toolchain.
- `.storybook/*.ts` defines Storybook.
- `.github/workflows/*.yaml` defines CI and deployment behavior.

If prose conflicts with configuration, follow the configuration and correct the
prose in the same change.

## Project overview

This repository contains a TypeScript-first personal portfolio built with
Gatsby and React and deployed as a static site to GitHub Pages. Tailwind CSS and
PostCSS provide styling, Storybook documents components, and MDX support is
enabled through Gatsby.

Prefer `.ts` and `.tsx` files over `.js` and `.jsx`. Keep configuration files in
TypeScript when the associated tool supports TypeScript configuration natively.
Do not add a runtime TypeScript loader unless a configured tool demonstrably
requires one.

## Setup and commands

Use the pnpm version declared by `packageManager` in `package.json` and a Node.js
version compatible with it. CI is the authoritative reference environment.

```bash
pnpm install --frozen-lockfile
pnpm typecheck
pnpm build
pnpm storybook
pnpm build-storybook
```

Only invoke scripts that currently exist in `package.json`. Do not document or
assume lint, format, or test scripts until they are added there.

## Working conventions

- Run `pnpm typecheck` after changing TypeScript or TypeScript configuration.
- Run `pnpm build` for changes that can affect Gatsby's production output.
- Run `pnpm build-storybook` for Storybook configuration or component changes.
- Run `pnpm install` after dependency changes and commit the resulting
  `pnpm-lock.yaml` update.
- Follow `prettier.config.ts` for formatting rather than restating its options
  here.
- Keep reusable components in `src/components`, pages in `src/pages`, global
  styles in `src/styles`, and image assets in `src/images`.
- Keep the site static; do not introduce a required server-side runtime.
- Prefix browser-exposed environment variables with `GATSBY_`.

## Gatsby troubleshooting

- If Gatsby cache state causes unexpected failures, run `pnpm clean` and retry.
- Restart Gatsby after schema or data-source changes.
- Configure path aliases consistently in TypeScript and Gatsby when adding
  them.
- Native image processing depends on Sharp; ensure dependency build scripts ran
  before diagnosing image-related build failures.
