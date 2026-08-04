# Copilot Instructions for CV Website

## Repository Overview

This is a personal portfolio/CV website project built with Gatsby, React, and
TypeScript.

**Repository Name**
: `shorodilov.github.io`

**Type**
: GitHub Pages personal website

**Current State**
: Gatsby application with TypeScript, MDX, Tailwind CSS, Storybook, and a
GitHub Pages deployment workflow.

**Size**
: Small repository with configuration and documentation files
(excluding node_modules)

**Tech Stack**
:
  - Framework: Gatsby (static site generator)
  - UI Library: React
  - Language: TypeScript
  - Styling: Tailwind CSS
  - Component Documentation: Storybook
  - Content: MDX
  - Package manager: pnpm 11.19.0

## Prerequisites & Environment

**Required versions**:

- Node.js v20.19.0 or v22.13.0+
- pnpm v11.19.0

**Verification**: Run `node --version && pnpm --version` to confirm
installation.

## Current Project Structure

```
.
├── .github/              # GitHub Actions and assistant instructions
├── .aiassistant/         # Assistant rules
├── src/                  # Gatsby source files
├── .editorconfig         # Comprehensive editor configuration
├── .gitignore            # Node/Gatsby/React ignore rules
├── LICENSE               # MIT License
├── README.md             # Project documentation
├── package.json          # Package manifest with scripts and dependencies
├── pnpm-lock.yaml        # pnpm lockfile
└── pnpm-workspace.yaml   # pnpm workspace configuration
```

**Important**: Treat `package.json#packageManager`, `pnpm-lock.yaml`, and
`pnpm-workspace.yaml` as authoritative package-manager configuration.

## Repository Layout (Current)

### Root Directory Files

1. **package.json**: Package manifest with metadata, scripts, dependencies,
   pnpm package-manager pin, and Node engine constraints.
2. **README.md**: Contains setup instructions and the current tech stack.
3. **.editorconfig**: Extensive configuration file with settings for
   TypeScript, JavaScript, JSON, YAML, SCSS/SASS, HTML, and Markdown.
4. **.gitignore**: Comprehensive ignore rules for Node.js, Gatsby (.cache/,
   public/), React, package-manager artifacts, and IDE files.
5. **LICENSE**: MIT License (applies to the contents of this repository,
   including this instructions file, unless otherwise noted)

### .editorconfig Key Settings

**Critical style rules from .editorconfig**:

- **Indentation**: 4 spaces for most files, 2 spaces for JSON/YAML/SCSS/SASS
- **Line endings**: LF (Unix-style)
- **Charset**: UTF-8
- **Max line length**: 119 characters (79 for README.md)
- **Insert final newline**: true
- **TypeScript/JavaScript**: Use double quotes, semicolons required
- **Field prefix convention**: In TypeScript/JavaScript classes, use an
  underscore prefix only for **private instance fields/properties** (for
  example, `private _title: string;`). Do **not** use the underscore for public
  properties or plain object literals.

## Build & Development Commands

**Working commands**:

- `pnpm install` - Install dependencies
- `node --version` - Verify Node.js installation
- `pnpm --version` - Verify pnpm installation
- `pnpm develop` - Start Gatsby development server (usually
  on `http://localhost:8000`)
- `pnpm build` - Build static site for production (outputs to `public/`)
- `pnpm serve` - Serve production build locally
- `pnpm clean` - Clean Gatsby cache and public directory
- `pnpm run typecheck` - Run TypeScript compiler checks
- `pnpm storybook` - Start Storybook dev server
- `pnpm build-storybook` - Build Storybook for production

**Important**: Run `pnpm install` after cloning or when `package.json` changes,
before running any other commands.

**Gatsby-specific notes**:

- The first build may take 30–120 seconds as Gatsby compiles and optimizes
- Development server includes hot reload – changes appear automatically
- If build fails with cache issues, run `pnpm clean` then retry
- The `public/` directory is gitignored and rebuilt on each production build
- The `.cache/` directory is gitignored and managed by Gatsby

## Project Setup Notes

The Gatsby project is already initialized at the repository root. Do not rerun
`gatsby new` in this repository.

When changing dependencies:

- Use `pnpm add` or `pnpm add -D`.
- Run `pnpm install` after editing `package.json`.
- Commit the resulting `package.json` and `pnpm-lock.yaml` changes together.

## Validation & CI/CD

**Current State**: GitHub Pages deployment is configured in
`.github/workflows/gatsby.yml`. The workflow installs pnpm 11.19.0, sets up Node
22.13.0, runs `pnpm install --frozen-lockfile`, and builds with `pnpm build`.

**Expected validation steps**:

1. TypeScript compilation check: `pnpm run typecheck` (or `tsc --noEmit`)
2. Linting: `pnpm lint` (if ESLint configured)
3. Build verification: `pnpm build` (must complete without errors)
4. Tests: `pnpm test` (if configured)
5. Format check: `pnpm format --check` (if Prettier configured)

## Common Gatsby Pitfalls & Workarounds

These issues may occur once Gatsby is initialized:

1. **Cache corruption**: If builds fail with cryptic errors, run `pnpm clean`
   or `rm -rf .cache public`
2. **GraphQL schema conflicts**: Restart dev server after adding new data
   sources
3. **Module resolution**: Gatsby uses custom webpack config; path aliases must
   be configured in both `tsconfig.json` and `gatsby-config.ts`
4. **Node.js version**: This project requires Node v20.19.0 or v22.13.0+;
   verify version before reporting issues
5. **Sharp/image processing**: Native dependencies may need rebuild:
   `pnpm install --force`
6. **Environment variables**: Prefix with `GATSBY_` to make available in
   browser code

## Making Code Changes

When implementing features:

1. **Follow .editorconfig rules**: Use 4-space indentation, double quotes, and
   semicolons
2. **TypeScript**: Use explicit types where helpful; avoid `any` unless
   necessary
3. **React**: Use functional components with hooks (modern React style)
4. **File structure** (typical Gatsby convention):
    - `src/pages/` - Page components (automatically become routes)
    - `src/components/` - Reusable React components
    - `src/templates/` - Page templates for dynamic pages
    - `src/styles/` - Global styles and Tailwind configuration
    - `src/images/` - Static images
    - `src/utils/` or `src/lib/` - Utility functions
    - `static/` - Files copied directly to public/ (favicon, robots.txt)

5. **Testing changes**:
    - Run dev server: `pnpm develop`
    - Visit `http://localhost:8000` to preview
    - GraphiQL available at `http://localhost:8000/___graphql`
    - Check the browser console for errors
    - Verify TypeScript compilation: `pnpm run typecheck`
    - Run full build: `pnpm build` (test production output)

## Dependencies

**Current**:

- Core: `gatsby`, `react`, `react-dom`
- TypeScript: `typescript`, type definitions (`@types/*`)
- Tailwind: `tailwindcss`, `postcss`, `autoprefixer`
- Gatsby plugins: `gatsby-plugin-postcss`, `gatsby-plugin-mdx`,
  `gatsby-plugin-image`, and related Gatsby packages
- Storybook: `@storybook/react-webpack5`, `@storybook/addon-*`
- MDX: `gatsby-plugin-mdx`, `@mdx-js/react`

### When adding dependencies

- Prefer stable versions over `latest` tag
- After editing `package.json`, run `pnpm install` to update `pnpm-lock.yaml`,
  and commit any resulting changes.
- Document major dependency additions in README if they affect setup

## Key Facts

1. **GitHub Pages**: This repository (`*.github.io`) will be deployed to GitHub
   Pages, so production build must be static HTML/CSS/JS.
2. **No backend**: This is a static site; avoid dependencies that require
   Node.js runtime.
3. **TypeScript-first**: Prefer .ts/.tsx files over .js/.jsx.
4. **Tailwind for styling**: Use Tailwind utility classes instead of custom CSS
   where possible.
5. **Code style**: Enforced by .editorconfig; many IDEs will auto-format on
   save.

## Trust These Instructions

These instructions are based on a thorough exploration of the repository and
validation of available commands. Only perform additional searches if:

- Information here is incomplete for your specific task
- You encounter errors not documented in the "Common Pitfalls" section
- The project state has changed significantly (e.g., Gatsby has been
  initialized)

When in doubt, check the README.md for the project owner's intent, and verify
the current project state with `ls -la` and `cat package.json` before assuming
commands are available.
