import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { BackLink } from "./BackLink"

describe("BackLink", () => {
  it("renders an accessible native link", () => {
    render(<BackLink aria-label="Back to projects" href="/projects" />)

    expect(screen.getByRole("link", { name: "Back to projects" })).toHaveAttribute("href", "/projects")
  })

  it("supports keyboard activation", async () => {
    const user = userEvent.setup()
    const onClick = vi.fn((event: React.MouseEvent<HTMLAnchorElement>) => event.preventDefault())

    render(<BackLink aria-label="Back to projects" href="/projects" onClick={onClick} />)

    const link = screen.getByRole("link", { name: "Back to projects" })

    await user.tab()
    expect(link).toHaveFocus()

    await user.keyboard("{Enter}")
    expect(onClick).toHaveBeenCalledOnce()
  })

  it("keeps its decorative icon out of the accessibility tree", () => {
    render(<BackLink aria-label="Back to projects" data-navigation="back" href="/projects" />)

    const link = screen.getByRole("link", { name: "Back to projects" })
    expect(link).toHaveAttribute("data-navigation", "back")
    expect(link.querySelector("svg")).toHaveAttribute("aria-hidden", "true")
  })
})
