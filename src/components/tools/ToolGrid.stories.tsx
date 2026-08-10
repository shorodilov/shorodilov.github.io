import * as React from "react"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { type Tool } from "../../data/tool/types"
import { ToolGrid } from "./ToolGrid"

const tools = [
  {
    id: "cplusplus",
    label: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  },
  {
    id: "python",
    label: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    id: "aws",
    label: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    id: "docker",
    label: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    id: "postgresql",
    label: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    id: "typescript",
    label: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
] satisfies Tool[]

const meta = {
  title: "Tools/ToolGrid",
  component: ToolGrid,
  tags: ["autodocs"],
  args: {
    "aria-label": "Tools",
    tools,
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ToolGrid>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Wrapped: Story = {
  args: {
    className: "w-48",
  },
}

export const LightTheme: Story = {
  globals: {
    theme: "light",
  },
}

export const Empty: Story = {
  args: {
    tools: [],
  },
}
