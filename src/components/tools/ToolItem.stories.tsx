import * as React from "react"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { ToolItem } from "./ToolItem"

const icons = {
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  cplusplus: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
}

const meta = {
  title: "Tools/ToolItem",
  component: ToolItem,
  tags: ["autodocs"],
  args: {
    icon: icons.cplusplus,
    label: "C++",
  },
  parameters: {
    layout: "centered",
  },
  render: (args) => (
    <ul className="w-80 list-none p-0">
      <ToolItem {...args} />
    </ul>
  ),
} satisfies Meta<typeof ToolItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LongLabel: Story = {
  args: {
    icon: icons.aws,
    label: "Amazon Web Services",
  },
}

export const LightTheme: Story = {
  globals: {
    theme: "light",
  },
}

export const Catalogue: Story = {
  render: () => (
    <ul className="w-80 list-none space-y-2 p-0">
      <ToolItem icon={icons.cplusplus} label="C++" />
      <ToolItem icon={icons.python} label="Python" />
      <ToolItem icon={icons.aws} label="AWS" />
      <ToolItem icon={icons.docker} label="Docker" />
    </ul>
  ),
}
