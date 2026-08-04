# Copilot Instructions for CV Website

## Repository Overview

This is a personal portfolio/CV website project built with Gatsby,
React, and TypeScript.

**Repository Name**
: `shorodilov.github.io`

**Type**
: GitHub Pages personal website

**Current State**
: Gatsby project initialized with TypeScript, Tailwind CSS, MDX, and Storybook

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

## Prerequisites & Environment

**Required versions**:

- Node.js v18 or higher (verified: v20.19.6 works)
- Yarn v1.22.x or higher (verified: v1.22.22 works)

**Verification**: Run `node --version && yarn --version` to confirm
installation.

## Current Project Structure

```
.
├── .ai/rules/            # AI assistant rules
├── .github/              # GitHub configuration and Copilot instructions
├── src/
│   ├── images/           # Static images
│   ├── pages/            # Page components (routes)
│   └── styles/           # Global styles and Tailwind configuration
├── .editorconfig         # Comprehensive editor configuration
├── .gitignore            # Node/Gatsby/React gitignore rules
├── AGENTS.md             # AI assistant entry point
├── gatsby-browser.js     # Gatsby browser APIs
├── gatsby-config.ts      # Gatsby configuration
├── LICENSE               # MIT License
├── package.json          # Project manifest with scripts and dependencies
├── postcss.config.js     # PostCSS configuration
├── prettier.config.ts    # Prettier configuration (source of truth for formatting)
├── README.md             # Project documentation
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── yarn.lock             # Yarn lockfile
```

**Important**: There are source files, build scripts, and dependencies already
in place. Run `yarn install` after cloning or when `package.json` changes,
BEFORE running any other commands.

## Repository Layout (Current)

### Root Directory Files

1. **package.json**: Project manifest with `scripts` (develop, build, serve,
   clean, typecheck, storybook, build-storybook) and full `dependencies` /
   `devDependencies` sections.
2. **README.md**: Contains a planned tech stack and intended project structure.
   Read this to understand the project's goals.
3. **.editorconfig**: Extensive configuration file with settings for
   TypeScript, JavaScript, JSON, YAML, SCSS/SASS, HTML, and Markdown.
4. **.gitignore**: Comprehensive ignore rules for Node.js, Gatsby (.cache/,
   public/), React, Yarn, and IDE files.
5. **LICENSE**: MIT License (applies to the contents of this repository,
   including this instructions file, unless otherwise noted)

### .editorconfig Key Settings

**Critical style rules from .editorconfig**:

- **Indentation**: 4 spaces for most files, 2 spaces for JSON/YAML/SCSS/SASS
- **Line endings**: LF (Unix-style)
- **Charset**: UTF-8
- **Max line length**: 119 characters (79 for README.md)
- **Insert final newline**: true
- **TypeScript/JavaScript**: Use double quotes; note that `prettier.config.ts`
  sets `semi: false`, so Prettier removes semicolons on format even if an IDE
  inserts them — Prettier is the source of truth for TypeScript/JavaScript
  formatting, overriding `.editorconfig` where they conflict
- **Field prefix convention**: In TypeScript/JavaScript classes, use an
  underscore prefix only for **private instance fields/properties** (for
  example, `private _title: string;`). Do **not** use the underscore for public
  properties or plain object literals.

## Build & Development Commands

**Prerequisites**: Run `yarn install` after cloning or when `package.json`
changes, BEFORE running any other commands.

**Available scripts** (`package.json`):

- `yarn develop` - Start Gatsby development server (usually on `http://localhost:8000`)
- `yarn build` - Build static site for production (outputs to `public/`)
- `yarn serve` - Serve production build locally
- `yarn clean` - Clean Gatsby cache and public directory
- `yarn typecheck` - Run TypeScript compiler checks (`tsc --noEmit`)
- `yarn storybook` - Start Storybook dev server (port 6006)
- `yarn build-storybook` - Build Storybook for production

**Format with Prettier**:

- Run `npx prettier --write .` to format all files
- `prettier.config.ts` is the authoritative Prettier configuration

**Gatsby-specific notes**:

- The first build may take 30–120 seconds as Gatsby compiles and optimizes
- Development server includes hot reload – changes appear automatically
- If build fails with cache issues, run `yarn clean` then retry
- The `public/` directory is gitignored and rebuilt on each production build
- The `.cache/` directory is gitignored and managed by Gatsby

## Validation & CI/CD

**Current State**: NO GitHub Actions workflows or CI/CD pipelines exist yet.

**Validation steps**:

1. TypeScript compilation check: `yarn typecheck` (or `tsc --noEmit`)
2. Build verification: `yarn build` (must complete without errors)
3. Format check: `npx prettier --check .`

**Recommended GitHub Actions workflow** (to be added):

- Trigger on: push, pull_request
- Steps: Install dependencies → Type check → Lint → Build → Test
- Consider: Deploy to GitHub Pages on push to the main branch

## Common Gatsby Pitfalls & Workarounds

1. **Cache corruption**: If builds fail with cryptic errors, run `yarn clean`
   or `rm -rf .cache public`
2. **GraphQL schema conflicts**: Restart dev server after adding new data
   sources
3. **Module resolution**: Gatsby uses custom webpack config; path aliases must
   be configured in both `tsconfig.json` and `gatsby-config.ts`
4. **Node.js version**: Gatsby requires Node 18+; verify version before
   reporting issues
5. **Sharp/image processing**: Native dependencies may need rebuild:
   `yarn install --force`
6. **Environment variables**: Prefix with `GATSBY_` to make available in
   browser code

## Making Code Changes

When implementing features:

1. **Follow formatting rules**: Use 4-space indentation and double quotes per
   `.editorconfig`; use no semicolons per `prettier.config.ts` (`semi: false`).
   Run Prettier before committing — it is the source of truth for
   TypeScript/JavaScript formatting.
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
    - Run dev server: `yarn develop`
    - Visit `http://localhost:8000` to preview
    - GraphiQL available at `http://localhost:8000/___graphql`
    - Check the browser console for errors
    - Verify TypeScript compilation: `yarn typecheck`
    - Run full build: `yarn build` (test production output)

## Dependencies

**Current dependencies** (see `package.json` for exact versions):

- Core: `gatsby`, `react`, `react-dom`
- TypeScript: `typescript`, type definitions (`@types/*`)
- Styling: `tailwindcss`, `postcss`, `autoprefixer`, `gatsby-plugin-postcss`
- Gatsby plugins: `gatsby-plugin-image`, `gatsby-plugin-manifest`,
  `gatsby-plugin-mdx`, `gatsby-plugin-sharp`, `gatsby-plugin-sitemap`,
  `gatsby-source-filesystem`, `gatsby-transformer-sharp`
- MDX: `gatsby-plugin-mdx`, `@mdx-js/react`
- Formatting: `prettier`, `prettier-plugin-tailwindcss`
- Storybook: `storybook`, `@storybook/react-webpack5`, related addons
- Utilities: `clsx`

### When adding dependencies

- Prefer stable versions over `latest` tag
- After editing `package.json`, run `yarn install` to create or update the
  `yarn.lock` file, and commit any resulting changes (including a newly
  created `yarn.lock`).
- Document major dependency additions in README if they affect setup

## Key Facts

1. **GitHub Pages**: This repository (`*.github.io`) will be deployed to GitHub
   Pages, so production build must be static HTML/CSS/JS.
2. **No backend**: This is a static site; avoid dependencies that require
   Node.js runtime.
3. **TypeScript-first**: Prefer .ts/.tsx files over .js/.jsx.
4. **Tailwind for styling**: Use Tailwind utility classes instead of custom CSS
   where possible.
5. **Code style**: `prettier.config.ts` is the source of truth for
   TypeScript/JavaScript formatting; `.editorconfig` governs indentation,
   line endings, and other editor settings.

## Trust These Instructions

These instructions are based on a thorough exploration of the repository and
validation of available commands. Only perform additional searches if:

- Information here is incomplete for your specific task
- You encounter errors not documented in the "Common Pitfalls" section
- The project state has changed significantly

When in doubt, check the README.md for the project owner's intent, and verify
the current project state with `ls -la` and `cat package.json` before assuming
commands are available.
