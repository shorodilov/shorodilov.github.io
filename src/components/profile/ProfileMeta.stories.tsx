import * as React from "react"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { ProfileMeta } from "./ProfileMeta"

const meta = {
  title: "Profile/ProfileMeta",
  component: ProfileMeta,
  tags: ["autodocs"],
  args: {
    languages: ["English", "Ukrainian"],
    location: "Ukraine",
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProfileMeta>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const SingleLanguage: Story = {
  args: {
    languages: ["Ukrainian"],
  },
}

export const LongMetadata: Story = {
  args: {
    languages: ["English", "Ukrainian", "Polish"],
    location: "Kyiv, Ukraine",
  },
}

export const LightTheme: Story = {
  globals: {
    theme: "light",
  },
}
