import * as React from "react"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { PageShell } from "./PageShell"

const content = (
  <div className="p-page-gutter">
    <h1 className="m-0 type-heading-3">Portfolio page shell</h1>
    <p className="mt-3 mb-0 max-w-readable type-body text-foreground-muted">
      Page-specific layout and behavior can be composed inside the shared portfolio surface.
    </p>
  </div>
)

const meta = {
  title: "Layout/PageShell",
  component: PageShell,
  tags: ["autodocs"],
  args: {
    children: content,
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof PageShell>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LightTheme: Story = {
  globals: {
    theme: "light",
  },
}
