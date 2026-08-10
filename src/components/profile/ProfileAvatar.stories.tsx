import * as React from "react"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { ProfileAvatar } from "./ProfileAvatar"

const avatar = "https://avatars.githubusercontent.com/u/22391544?v=4"

const meta = {
  title: "Profile/ProfileAvatar",
  component: ProfileAvatar,
  tags: ["autodocs"],
  args: {
    alt: "Portrait of Serhii Horodilov",
    src: avatar,
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProfileAvatar>

export default meta
type Story = StoryObj<typeof meta>

export const Compact: Story = {}

export const Large: Story = {
  args: {
    size: "large",
  },
}

export const Decorative: Story = {
  args: {
    alt: "",
  },
}

export const NonSquareSource: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
}

export const LightTheme: Story = {
  globals: {
    theme: "light",
  },
}
