import * as React from "react"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { PageFooter } from "./PageFooter"

const meta = {
  title: "Layout/PageFooter",
  component: PageFooter,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PageFooter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LightTheme: Story = {
  globals: {
    theme: "light",
  },
}
