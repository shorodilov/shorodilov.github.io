import * as React from "react"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { ProfileIdentity } from "./ProfileIdentity"

const meta = {
    title: "Profile/ProfileIdentity",
    component: ProfileIdentity,
    tags: ["autodocs"],
    args: {
        name: "Serhii Horodilov",
        role: "Software Engineer",
        summary: "I’m a software engineer who builds immersive and user-friendly applications that users love...",
    },
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof ProfileIdentity>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LongName: Story = {
    args: {
        name: "Serhii Oleksandrovych Horodilov",
    },
}

export const LongRole: Story = {
    args: {
        role: "Software Engineer and DevOps Specialist",
    },
}

export const LongSummary: Story = {
    args: {
        summary:
            "I design and build reliable software systems, developer tooling, and infrastructure while keeping the resulting products approachable for the people who use them.",
    },
}

export const LightTheme: Story = {
    globals: {
        theme: "light",
    },
}
