import * as React from "react"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { ProjectCard } from "./ProjectCard"

const cover = "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80"

const meta = {
  title: "Projects/ProjectCard",
  component: ProjectCard,
  tags: ["autodocs"],
  args: {
    cover,
    href: "/projects/spatial-data-verification-portal",
    title: "Spatial Data Verification Portal",
  },
  parameters: {
    layout: "centered",
  },
  render: (args) => (
    <div className="w-80 max-w-[calc(100vw-2.5rem)]">
      <ProjectCard {...args} />
    </div>
  ),
} satisfies Meta<typeof ProjectCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Wide: Story = {
  render: (args) => (
    <div className="w-[44rem] max-w-[calc(100vw-2.5rem)]">
      <ProjectCard {...args} />
    </div>
  ),
}

export const LongTitle: Story = {
  args: {
    title: "Platform for Remote Spatial Data Verification and Review",
  },
}

export const LightTheme: Story = {
  globals: {
    theme: "light",
  },
}
