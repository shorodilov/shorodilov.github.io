import * as React from "react"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { fn, userEvent, within } from "storybook/test"
import { ThemeToggle, type ColorTheme } from "./ThemeToggle"

const ControlledThemeToggle = () => {
    const [theme, setTheme] = React.useState<ColorTheme>("dark")

    return <ThemeToggle onThemeChange={setTheme} theme={theme} />
}

const meta = {
    title: "Preferences/ThemeToggle",
    component: ThemeToggle,
    tags: ["autodocs"],
    args: {
        disabled: false,
        onThemeChange: fn(),
        theme: "dark",
        variant: "labeled",
    },
    argTypes: {
        variant: {
            control: "radio",
            options: ["labeled", "compact"],
        },
    },
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof ThemeToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {}

export const Light: Story = {
    args: {
        theme: "light",
    },
    globals: {
        theme: "light",
    },
}

export const CompactDark: Story = {
    args: {
        variant: "compact",
    },
}

export const CompactLight: Story = {
    args: {
        theme: "light",
        variant: "compact",
    },
    globals: {
        theme: "light",
    },
}

export const Hovered: Story = {
    play: async ({ canvasElement }) => {
        await userEvent.hover(within(canvasElement).getByText("Light"))
    },
}

export const Focused: Story = {
    play: async () => {
        await userEvent.tab()
    },
}

export const CompactFocused: Story = {
    args: {
        variant: "compact",
    },
    play: async () => {
        await userEvent.tab()
    },
}

export const CompactHovered: Story = {
    args: {
        variant: "compact",
    },
    play: async ({ canvasElement }) => {
        await userEvent.hover(within(canvasElement).getByText("Light"))
    },
}

export const Disabled: Story = {
    args: {
        disabled: true,
    },
}

export const CompactDisabled: Story = {
    args: {
        disabled: true,
        variant: "compact",
    },
}

export const Controlled: Story = {
    render: () => <ControlledThemeToggle />,
}
