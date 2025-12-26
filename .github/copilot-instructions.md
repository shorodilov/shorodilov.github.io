# Copilot Instructions for CV Website

## Repository Overview

This is a personal portfolio/CV website project that will be built with Gatsby, React, and TypeScript. The repository is currently in its **initial skeleton stage** with only configuration files and documentation.

**Repository Name**: `shorodilov.github.io`
**Type**: GitHub Pages personal website
**Current State**: Project skeleton (not yet initialized with Gatsby)
**Size**: ~228KB, <10 files (excluding node_modules)
**Tech Stack** (planned):
- Framework: Gatsby (static site generator)
- UI Library: React
- Language: TypeScript
- Styling: Tailwind CSS
- Component Documentation: Storybook (planned)
- Content: MDX (planned)

## Prerequisites & Environment

**Required versions**:
- Node.js v18 or higher (verified: v20.19.6 works)
- Yarn v1.22.x or higher (verified: v1.22.22 works)

**Verification**: Run `node --version && yarn --version` to confirm installation.

## Current Project Structure

```
.
├── .editorconfig          # Comprehensive editor configuration
├── .gitignore            # Node/Gatsby/React gitignore rules
├── LICENSE               # MIT License
├── README.md             # Project documentation
└── package.json          # Minimal package manifest (no scripts or dependencies yet)
```

**Important**: There are NO source files, build scripts, or dependencies in the current state. The project needs to be initialized with Gatsby before development can begin.

## Repository Layout (Current)

### Root Directory Files

1. **package.json**: Minimal manifest with name, repository, author, and license. NO scripts or dependencies defined yet.
2. **README.md**: Contains planned tech stack and intended project structure. Read this to understand the project's goals.
3. **.editorconfig**: Extensive configuration (508 lines) with settings for TypeScript, JavaScript, JSON, YAML, SCSS/SASS, HTML, and Markdown.
4. **.gitignore**: Comprehensive ignore rules for Node.js, Gatsby (.cache/, public/), React, Yarn, and IDE files.
5. **LICENSE**: MIT License

### .editorconfig Key Settings

**Critical style rules from .editorconfig**:
- **Indentation**: 4 spaces for most files, 2 spaces for JSON/YAML/SCSS/SASS
- **Line endings**: LF (Unix-style)
- **Charset**: UTF-8
- **Max line length**: 119 characters (79 for README.md)
- **Insert final newline**: true
- **TypeScript/JavaScript**: Use double quotes, semicolons required
- **Field prefix convention**: Underscore prefix for fields (`_fieldName`)

## Build & Development Commands

### Current State (Before Gatsby Initialization)

**Working commands**:
- `yarn install` - Installs dependencies (currently none, completes in <1s)
- `node --version` - Verify Node.js installation
- `yarn --version` - Verify Yarn installation

**Not yet available**: No build, test, or development commands exist until Gatsby is initialized.

### After Gatsby Initialization (Expected)

Once the Gatsby project is initialized, these commands will typically be available:

**Expected in package.json scripts**:
- `yarn develop` or `yarn dev` - Start Gatsby development server (usually on http://localhost:8000)
- `yarn build` - Build static site for production (outputs to `public/`)
- `yarn serve` - Serve production build locally
- `yarn clean` - Clean Gatsby cache and public directory
- `yarn type-check` - Run TypeScript compiler checks
- `yarn lint` - Run ESLint (if configured)
- `yarn format` - Run Prettier (if configured)
- `yarn test` - Run tests (if Jest/testing-library configured)
- `yarn storybook` - Start Storybook dev server (if configured)
- `yarn build-storybook` - Build Storybook for production

**Important**: ALWAYS run `yarn install` after cloning or when package.json changes, BEFORE running any other commands.

**Gatsby-specific notes**:
- First build may take 30-120 seconds as Gatsby compiles and optimizes
- Development server includes hot reload - changes appear automatically
- If build fails with cache issues, run `yarn clean` then retry
- The `public/` directory is gitignored and rebuilt on each production build
- The `.cache/` directory is gitignored and managed by Gatsby

## Initialization Instructions

If the Gatsby project needs to be initialized from this skeleton:

1. **Option A - Using Gatsby CLI**:
   ```bash
   yarn global add gatsby-cli
   # Remove or backup current files as needed
   gatsby new . --ts  # Initialize with TypeScript
   # Restore LICENSE, README.md, .editorconfig if needed
   ```

2. **Option B - Manual setup**:
   ```bash
   # Add Gatsby dependencies to package.json
   yarn add gatsby react react-dom
   yarn add -D typescript @types/react @types/react-dom @types/node
   yarn add gatsby-plugin-typescript
   
   # Create required Gatsby files:
   # - gatsby-config.ts (or .js)
   # - gatsby-node.ts (or .js) 
   # - gatsby-browser.ts (or .js)
   # - src/pages/index.tsx
   ```

3. **Add Tailwind CSS** (per README):
   ```bash
   yarn add tailwindcss postcss autoprefixer gatsby-plugin-postcss
   npx tailwindcss init -p
   # Configure gatsby-config.ts and tailwind.config.js
   ```

## Validation & CI/CD

**Current State**: NO GitHub Actions workflows or CI/CD pipelines exist yet.

**Expected validation steps** (once project is initialized):
1. TypeScript compilation check: `yarn type-check` (or `tsc --noEmit`)
2. Linting: `yarn lint` (if ESLint configured)
3. Build verification: `yarn build` (must complete without errors)
4. Tests: `yarn test` (if configured)
5. Format check: `yarn format --check` (if Prettier configured)

**Recommended GitHub Actions workflow** (to be added):
- Trigger on: push, pull_request
- Steps: Install dependencies → Type check → Lint → Build → Test
- Consider: Deploy to GitHub Pages on push to main branch

## Common Gatsby Pitfalls & Workarounds

These issues may occur once Gatsby is initialized:

1. **Cache corruption**: If builds fail with cryptic errors, run `yarn clean` or `rm -rf .cache public`
2. **GraphQL schema conflicts**: Restart dev server after adding new data sources
3. **Module resolution**: Gatsby uses custom Webpack config; path aliases must be configured in both `tsconfig.json` and `gatsby-config.ts`
4. **Node.js version**: Gatsby requires Node 18+; verify version before reporting issues
5. **Sharp/image processing**: Native dependencies may need rebuild: `yarn install --force`
6. **Environment variables**: Prefix with `GATSBY_` to make available in browser code

## Making Code Changes

When implementing features:

1. **Follow .editorconfig rules**: Use 4-space indentation, double quotes, and semicolons
2. **TypeScript**: Use explicit types where helpful; avoid `any` unless necessary
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
   - Visit http://localhost:8000 to preview
   - GraphiQL available at http://localhost:8000/___graphql
   - Check browser console for errors
   - Verify TypeScript compilation: `yarn type-check`
   - Run full build: `yarn build` (test production output)

## Dependencies

**Current**: None (package.json has no dependencies or devDependencies)

**Expected after initialization**:
- Core: `gatsby`, `react`, `react-dom`
- TypeScript: `typescript`, type definitions (`@types/*`)
- Tailwind: `tailwindcss`, `postcss`, `autoprefixer`
- Gatsby plugins: `gatsby-plugin-typescript`, `gatsby-plugin-postcss`, others as needed
- Storybook: `@storybook/react`, `@storybook/addon-*` (if implemented)
- MDX: `gatsby-plugin-mdx`, `@mdx-js/react` (if implemented)

**When adding dependencies**:
- Prefer stable versions over `latest` tag
- Update yarn.lock: `yarn install` after adding to package.json
- Document major dependency additions in README if they affect setup

## Key Facts

1. **GitHub Pages**: This repository (`*.github.io`) will be deployed to GitHub Pages, so production build must be static HTML/CSS/JS.
2. **No backend**: This is a static site; avoid dependencies that require Node.js runtime.
3. **TypeScript-first**: Prefer .ts/.tsx files over .js/.jsx.
4. **Tailwind for styling**: Use Tailwind utility classes instead of custom CSS where possible.
5. **Code style**: Enforced by .editorconfig; many IDEs will auto-format on save.

## Trust These Instructions

These instructions are based on a thorough exploration of the repository and validation of available commands. Only perform additional searches if:
- Information here is incomplete for your specific task
- You encounter errors not documented in the "Common Pitfalls" section
- The project state has changed significantly (e.g., Gatsby has been initialized)

When in doubt, check the README.md for the project owner's intent, and verify the current project state with `ls -la` and `cat package.json` before assuming commands are available.
