import * as React from "react"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { userEvent, within } from "storybook/test"
import { Button } from "./Button"

const LinkedInMark = () => (
  <span
    aria-hidden="true"
    className="inline-flex size-4 items-center justify-center rounded-xs border border-current type-button-sm"
  >
    in
  </span>
)

const meta = {
  title: "Actions/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Contact me",
    disabled: false,
    variant: "primary",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "icon"],
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <LinkedInMark />
        <span>LinkedIn</span>
      </>
    ),
  },
}

export const IconOnly: Story = {
  args: {
    "aria-label": "Send email",
    "children": <span aria-hidden="true">@</span>,
    "variant": "icon",
  },
}

export const Hovered: Story = {
  play: async ({ canvasElement }) => {
    await userEvent.hover(within(canvasElement).getByRole("button"))
  },
}

export const Focused: Story = {
  play: async () => {
    await userEvent.tab()
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const IconHovered: Story = {
  args: {
    "aria-label": "Send email",
    "children": <span aria-hidden="true">@</span>,
    "variant": "icon",
  },
  play: async ({ canvasElement }) => {
    await userEvent.hover(within(canvasElement).getByRole("button"))
  },
}

export const IconFocused: Story = {
  args: {
    "aria-label": "Send email",
    "children": <span aria-hidden="true">@</span>,
    "variant": "icon",
  },
  play: async () => {
    await userEvent.tab()
  },
}

export const IconDisabled: Story = {
  args: {
    "aria-label": "Send email",
    "children": <span aria-hidden="true">@</span>,
    "disabled": true,
    "variant": "icon",
  },
}

export const LongLabel: Story = {
  args: {
    children: "Download curriculum vitae",
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
