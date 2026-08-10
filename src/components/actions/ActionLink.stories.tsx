import * as React from "react"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { userEvent, within } from "storybook/test"
import { ActionLink } from "./ActionLink"

const LinkedInMark = () => (
    <span
        aria-hidden="true"
        className="type-button-sm inline-flex size-4 items-center justify-center rounded-xs border border-current"
    >
        in
    </span>
)

const iconArgs = {
    "aria-label": "Send email",
    "children": <span aria-hidden="true">@</span>,
    "href": "mailto:serhii@example.com",
    "variant": "icon" as const,
}

const compactArgs = {
    children: "View all",
    href: "/projects",
    variant: "compact" as const,
}

const meta = {
    title: "Actions/ActionLink",
    component: ActionLink,
    tags: ["autodocs"],
    args: {
        children: "LinkedIn",
        disabled: false,
        href: "https://www.linkedin.com/in/serhii-horodilov/",
        variant: "primary",
    },
    argTypes: {
        variant: {
            control: "radio",
            options: ["primary", "icon", "compact"],
        },
    },
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof ActionLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const PrimaryWithIcon: Story = {
    args: {
        children: (
            <>
                <LinkedInMark />
                <span>LinkedIn</span>
            </>
        ),
    },
}

export const PrimaryHovered: Story = {
    play: async ({ canvasElement }) => {
        await userEvent.hover(within(canvasElement).getByRole("link"))
    },
}

export const PrimaryFocused: Story = {
    play: async () => {
        await userEvent.tab()
    },
}

export const PrimaryDisabled: Story = {
    args: {
        disabled: true,
    },
}

export const Icon: Story = {
    args: iconArgs,
}

export const IconHovered: Story = {
    args: iconArgs,
    play: async ({ canvasElement }) => {
        await userEvent.hover(within(canvasElement).getByRole("link"))
    },
}

export const IconFocused: Story = {
    args: iconArgs,
    play: async () => {
        await userEvent.tab()
    },
}

export const IconDisabled: Story = {
    args: {
        ...iconArgs,
        disabled: true,
    },
}

export const Compact: Story = {
    args: compactArgs,
}

export const CompactHovered: Story = {
    args: compactArgs,
    play: async ({ canvasElement }) => {
        await userEvent.hover(within(canvasElement).getByRole("link"))
    },
}

export const CompactFocused: Story = {
    args: compactArgs,
    play: async () => {
        await userEvent.tab()
    },
}

export const CompactDisabled: Story = {
    args: {
        ...compactArgs,
        disabled: true,
    },
}

export const LongLabel: Story = {
    args: {
        children: "Read all software engineering case studies",
    },
}

export const FullWidth: Story = {
    args: {
        className: "w-full",
    },
    decorators: [
        (Story) => (
            <div className="w-80 max-w-[calc(100vw-2.5rem)]">
                <Story />
            </div>
        ),
    ],
}
