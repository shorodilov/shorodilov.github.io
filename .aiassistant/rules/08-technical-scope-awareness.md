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
- pnpm as pinned by `package.json#packageManager`
- GitHub Pages deployment through the Gatsby workflow

The assistant must treat `pnpm-lock.yaml`, `pnpm-workspace.yaml`, and the
`packageManager` field in `package.json` as the authoritative package-manager
configuration.

For package workflows, use pnpm commands such as:

- `pnpm install`
- `pnpm build`
- `pnpm run typecheck`
- `pnpm storybook`

Within these established choices, the project may still involve decisions about:

- Performance, SEO, and accessibility
- Analytics, privacy, and security

The assistant must not propose changing established technical choices without
explicit direction.
