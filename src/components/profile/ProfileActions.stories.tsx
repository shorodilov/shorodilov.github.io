import * as React from "react"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { profile } from "../../data/profile"
import { ProfileActions } from "./ProfileActions"

const meta = {
  title: "Profile/ProfileActions",
  component: ProfileActions,
  tags: ["autodocs"],
  args: {
    email: profile.email,
    github: profile.github,
    linkedin: profile.linkedin,
    variant: "featured",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["featured", "icons"],
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProfileActions>

export default meta
type Story = StoryObj<typeof meta>

export const Featured: Story = {
  args: {
    email: "example@example.org",
    github: "#",
    linkedin: "#",
  },
}

export const Icons: Story = {
  args: {
    variant: "icons",
    email: "example@example.com",
    github: "#",
    linkedin: "#",
  },
}

export const LightTheme: Story = {
  args: {
    email: "example@example.org",
    github: "#",
    linkedin: "#",
  },

  globals: {
    theme: "light",
  },
}
