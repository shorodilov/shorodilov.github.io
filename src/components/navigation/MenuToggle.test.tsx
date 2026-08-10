import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { MenuToggle } from "./MenuToggle"

describe("MenuToggle", () => {
  it("describes the controlled navigation in each state", () => {
    const { rerender } = render(<MenuToggle controls="primary-navigation" open={false} />)

    const closedToggle = screen.getByRole("button", { name: "Open navigation menu" })
    expect(closedToggle).toHaveAttribute("aria-controls", "primary-navigation")
    expect(closedToggle).toHaveAttribute("aria-expanded", "false")
    expect(closedToggle.querySelector("svg")).toHaveAttribute("aria-hidden", "true")

    rerender(<MenuToggle controls="primary-navigation" open />)

    expect(screen.getByRole("button", { name: "Close navigation menu" })).toHaveAttribute("aria-expanded", "true")
  })

  it("supports keyboard activation in controlled usage", async () => {
    const user = userEvent.setup()

    const ControlledMenuToggle = () => {
      const [open, setOpen] = React.useState(false)

      return <MenuToggle controls="primary-navigation" onClick={() => setOpen((value) => !value)} open={open} />
    }

    render(<ControlledMenuToggle />)

    await user.tab()
    expect(screen.getByRole("button", { name: "Open navigation menu" })).toHaveFocus()

    await user.keyboard("{Enter}")

    expect(screen.getByRole("button", { name: "Close navigation menu" })).toHaveAttribute("aria-expanded", "true")
  })

  it("uses a safe button type and forwards native attributes", () => {
    render(<MenuToggle controls="primary-navigation" data-navigation="toggle" open={false} />)

    const toggle = screen.getByRole("button", { name: "Open navigation menu" })
    expect(toggle).toHaveAttribute("type", "button")
    expect(toggle).toHaveAttribute("data-navigation", "toggle")
  })

  it("does not handle activation when disabled", async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    render(<MenuToggle controls="primary-navigation" disabled onClick={onClick} open={false} />)

    const toggle = screen.getByRole("button", { name: "Open navigation menu" })
    expect(toggle).toBeDisabled()

    await user.click(toggle)

    expect(onClick).not.toHaveBeenCalled()
  })
})
