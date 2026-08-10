import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { ActionLink } from "./ActionLink"

describe("ActionLink", () => {
  it("renders a native link and handles activation", async () => {
    const user = userEvent.setup()
    const onClick = vi.fn((event: React.MouseEvent<HTMLAnchorElement>) => event.preventDefault())

    render(
      <ActionLink href="/projects" onClick={onClick}>
        View projects
      </ActionLink>,
    )

    const link = screen.getByRole("link", { name: "View projects" })
    expect(link).toHaveAttribute("href", "/projects")

    await user.click(link)

    expect(onClick).toHaveBeenCalledOnce()
  })

  it("supports an accessible icon-only link", () => {
    render(
      <ActionLink aria-label="Email Serhii" href="mailto:serhii@example.com" variant="icon">
        <span aria-hidden="true">@</span>
      </ActionLink>,
    )

    expect(screen.getByRole("link", { name: "Email Serhii" })).toHaveAttribute("href", "mailto:serhii@example.com")
  })

  it("protects links that open a new tab", () => {
    render(
      <ActionLink href="https://example.com" rel="external" target="_blank">
        External profile
      </ActionLink>,
    )

    const link = screen.getByRole("link", { name: "External profile" })
    expect(link).toHaveAttribute("target", "_blank")
    expect(link.getAttribute("rel")?.split(" ")).toEqual(
      expect.arrayContaining(["external", "noopener", "noreferrer"]),
    )
  })

  it("preserves native anchor attributes", () => {
    render(
      <ActionLink download href="/serhii-horodilov-cv.pdf" variant="compact">
        Download CV
      </ActionLink>,
    )

    expect(screen.getByRole("link", { name: "Download CV" })).toHaveAttribute("download")
  })

  it("removes disabled links from navigation and activation", async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    render(
      <ActionLink disabled href="/projects" onClick={onClick}>
        View projects
      </ActionLink>,
    )

    const link = screen.getByRole("link", { name: "View projects" })
    expect(link).toHaveAttribute("aria-disabled", "true")
    expect(link).toHaveAttribute("tabindex", "-1")
    expect(link).not.toHaveAttribute("href")

    await user.click(link)

    expect(onClick).not.toHaveBeenCalled()
  })
})
