import * as React from "react"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { BackLink } from "../navigation/BackLink"
import { ThemeToggle } from "../preferences/ThemeToggle"
import { PageHeader } from "./PageHeader"

const meta = {
  title: "Layout/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background text-foreground">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PageHeader>

export default meta
type Story = StoryObj<typeof meta>

export const About: Story = {
  args: {
    leading: <BackLink aria-label="Back to home" href="/" />,
    title: "About",
  },
}

export const ProjectDetail: Story = {
  args: {
    leading: <BackLink aria-label="Back to projects" href="/projects" />,
    trailing: <ThemeToggle onThemeChange={() => undefined} theme="dark" />,
  },
}

export const WithAllSlots: Story = {
  args: {
    leading: <BackLink aria-label="Back to home" href="/" />,
    title: "About",
    trailing: <ThemeToggle onThemeChange={() => undefined} theme="dark" />,
  },
}
