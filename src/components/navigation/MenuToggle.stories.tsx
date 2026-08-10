import * as React from "react"
import { type Meta, type StoryObj } from "@storybook/react-webpack5"
import { userEvent, within } from "storybook/test"
import { MenuToggle, type MenuToggleProps } from "./MenuToggle"

const MenuTogglePreview = (args: MenuToggleProps) => (
  <>
    <MenuToggle {...args} />
    <div hidden={!args.open} id={args.controls} />
  </>
)

const ControlledMenuToggle = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <MenuToggle controls="story-navigation" onClick={() => setOpen((value) => !value)} open={open} />
      <div hidden={!open} id="story-navigation" />
    </>
  )
}

const meta = {
  title: "Navigation/MenuToggle",
  component: MenuToggle,
  tags: ["autodocs"],
  args: {
    controls: "primary-navigation",
    disabled: false,
    open: false,
  },
  render: (args) => <MenuTogglePreview {...args} />,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MenuToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Closed: Story = {}

export const Open: Story = {
  args: {
    open: true,
  },
}

export const ClosedHovered: Story = {
  play: async ({ canvasElement }) => {
    await userEvent.hover(within(canvasElement).getByRole("button"))
  },
}

export const ClosedFocused: Story = {
  play: async () => {
    await userEvent.tab()
  },
}

export const OpenHovered: Story = {
  args: {
    open: true,
  },
  play: async ({ canvasElement }) => {
    await userEvent.hover(within(canvasElement).getByRole("button"))
  },
}

export const OpenFocused: Story = {
  args: {
    open: true,
  },
  play: async () => {
    await userEvent.tab()
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Controlled: Story = {
  render: () => <ControlledMenuToggle />,
}
