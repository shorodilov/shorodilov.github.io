import * as React from "react"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"

interface TypographyRole {
  className: string
  family: string
  label: string
  metrics: string
  weight: number
}

const typographyRoles: TypographyRole[] = [
  {
    className: "type-body",
    family: "Inter",
    label: "Body",
    metrics: "16px / 22px",
    weight: 400,
  },
  {
    className: "type-heading-4-caps",
    family: "Cascadia Code",
    label: "Heading 4 uppercase",
    metrics: "16px / 24px",
    weight: 600,
  },
  {
    className: "type-heading-3",
    family: "Cascadia Code",
    label: "Heading 3",
    metrics: "24px / 32px",
    weight: 600,
  },
  {
    className: "type-heading-2-caps",
    family: "Cascadia Code",
    label: "Heading 2 uppercase",
    metrics: "20px / 32px",
    weight: 600,
  },
  {
    className: "type-heading-2",
    family: "Cascadia Code",
    label: "Heading 2",
    metrics: "20px / 28px",
    weight: 600,
  },
  {
    className: "type-heading-1-caps",
    family: "Cascadia Code",
    label: "Heading 1 uppercase",
    metrics: "32px / 40px",
    weight: 600,
  },
  {
    className: "type-button",
    family: "Cascadia Code",
    label: "Button",
    metrics: "16px / 24px",
    weight: 400,
  },
  {
    className: "type-button-sm",
    family: "Cascadia Code",
    label: "Small button",
    metrics: "12px / 18px",
    weight: 600,
  },
  {
    className: "type-caption",
    family: "Cascadia Code",
    label: "Caption",
    metrics: "14px / 20px",
    weight: 400,
  },
  {
    className: "type-caption-caps",
    family: "Inter",
    label: "Caption uppercase",
    metrics: "10px / 16px",
    weight: 500,
  },
]

const sample = "The quick brown fox jumps over the lazy dog."

const Typography = () => (
  <main className="min-h-screen bg-background p-page-gutter text-foreground">
    <div className="mx-auto max-w-page space-y-section">
      <header className="max-w-readable space-y-2">
        <h1 className="type-heading-1-caps">Typography</h1>
        <p className="type-body text-foreground-muted">
          Composite roles bundle family, weight, size, line height, and intentional casing into a stable utility
          contract.
        </p>
      </header>

      <section aria-label="Typography roles" className="space-y-4">
        {typographyRoles.map((role) => (
          <article
            className="grid gap-4 rounded-card border border-border bg-surface p-5 md:grid-cols-3 md:items-center"
            key={role.className}
          >
            <div className="space-y-1">
              <h2 className="type-button-sm text-foreground">{role.label}</h2>
              <p className="type-caption text-foreground-muted">
                {role.family} {role.weight} · {role.metrics}
              </p>
              <p className="type-caption text-accent">{role.className}</p>
            </div>
            <p className={`${role.className} break-words text-foreground md:col-span-2`}>{sample}</p>
          </article>
        ))}
      </section>
    </div>
  </main>
)

const meta = {
  title: "Foundations/Typography",
  component: Typography,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Roles: Story = {}
