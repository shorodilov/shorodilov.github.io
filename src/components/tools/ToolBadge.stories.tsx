import * as React from "react"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { ToolBadge } from "./ToolBadge"

const icons = {
    aws: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    cplusplus: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
}

const meta = {
    title: "Tools/ToolBadge",
    component: ToolBadge,
    tags: ["autodocs"],
    args: {
        icon: icons.cplusplus,
        label: "C++",
    },
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof ToolBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WideIcon: Story = {
    args: {
        icon: icons.aws,
        label: "AWS",
    },
}

export const LightTheme: Story = {
    globals: {
        theme: "light",
    },
}

export const Gallery: Story = {
    render: () => (
        <div className="flex gap-2">
            <ToolBadge icon={icons.cplusplus} label="C++" />
            <ToolBadge icon={icons.python} label="Python" />
            <ToolBadge icon={icons.aws} label="AWS" />
            <ToolBadge icon={icons.docker} label="Docker" />
        </div>
    ),
}
