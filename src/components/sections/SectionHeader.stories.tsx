import * as React from "react"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { ActionLink } from "../actions/ActionLink"
import { SectionHeader } from "./SectionHeader"

const meta = {
    title: "Sections/SectionHeader",
    component: SectionHeader,
    tags: ["autodocs"],
    args: {
        children: "Tools",
    },
    argTypes: {
        action: {
            control: false,
        },
    },
    decorators: [
        (Story) => (
            <div className="w-[42rem] max-w-[calc(100vw-2.5rem)]">
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof SectionHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithAction: Story = {
    args: {
        action: (
            <ActionLink href="/tools" variant="compact">
                View all
            </ActionLink>
        ),
    },
}

export const LongTitle: Story = {
    args: {
        action: (
            <ActionLink href="/projects" variant="compact">
                View all
            </ActionLink>
        ),
        children: "Selected software engineering and systems architecture work",
    },
}

export const NarrowContainer: Story = {
    args: {
        action: (
            <ActionLink href="/projects" variant="compact">
                View all
            </ActionLink>
        ),
        children: "Works",
    },
    decorators: [
        (Story) => (
            <div className="w-72">
                <Story />
            </div>
        ),
    ],
}
