import * as React from "react"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { type ProjectGridItem, ProjectGrid } from "./ProjectGrid"

const cover = "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80"

const projects: readonly ProjectGridItem[] = [
  {
    slug: "spatial-data-verification-portal",
    title: "Spatial Data Verification Portal",
    cover,
    href: "/projects/spatial-data-verification-portal",
  },
  {
    slug: "infrastructure-observability-platform",
    title: "Infrastructure Observability Platform",
    cover,
    href: "/projects/infrastructure-observability-platform",
  },
  {
    slug: "geospatial-data-processing-service",
    title: "Geospatial Data Processing Service",
    cover,
    href: "/projects/geospatial-data-processing-service",
  },
  {
    slug: "deployment-automation-toolkit",
    title: "Deployment Automation Toolkit",
    cover,
    href: "/projects/deployment-automation-toolkit",
  },
]

const meta = {
  title: "Projects/ProjectGrid",
  component: ProjectGrid,
  tags: ["autodocs"],
  args: {
    "aria-label": "Projects",
    projects,
  },
  argTypes: {
    layout: {
      control: "radio",
      options: ["grid", "preview"],
    },
  },
  parameters: {
    layout: "padded",
  },
  render: (args) => (
    <div className="mx-auto max-w-4xl">
      <ProjectGrid {...args} />
    </div>
  ),
} satisfies Meta<typeof ProjectGrid>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Preview: Story = {
  args: {
    layout: "preview",
  },
}

export const SingleProject: Story = {
  args: {
    projects: projects.slice(0, 1),
  },
}

export const Empty: Story = {
  args: {
    projects: [],
  },
}

export const LightTheme: Story = {
  globals: {
    theme: "light",
  },
}
