import * as React from "react"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { userEvent, within } from "storybook/test"
import { BackLink } from "./BackLink"

const meta = {
  title: "Navigation/BackLink",
  component: BackLink,
  tags: ["autodocs"],
  args: {
    "aria-label": "Back to projects",
    "href": "/projects",
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BackLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Hovered: Story = {
  play: async ({ canvasElement }) => {
    await userEvent.hover(within(canvasElement).getByRole("link"))
  },
}

export const Focused: Story = {
  play: async () => {
    await userEvent.tab()
  },
}
