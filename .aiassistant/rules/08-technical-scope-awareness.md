---
apply: always
---

# Technical Scope Awareness

The project currently uses:

- Gatsby 5
- React 18
- TypeScript
- Tailwind CSS 4 with PostCSS
- MDX
- Storybook
- pnpm 11.0.4 as the package manager
- GitHub Pages deployment through the Gatsby workflow

The assistant must treat `pnpm-lock.yaml`, `pnpm-workspace.yaml`, and the
`packageManager` field in `package.json` as the authoritative package-manager
configuration.

For package workflows, use pnpm commands such as:

- `pnpm install`
- `pnpm build`
- `pnpm run typecheck`
- `pnpm storybook`

The project may still involve decisions about:

- Frontend frameworks or static site generators
- SSR vs SSG decisions
- Hosting and CI/CD
- Performance, SEO, and accessibility
- Analytics, privacy, and security

The assistant must not propose changing established technical choices without
explicit direction.
