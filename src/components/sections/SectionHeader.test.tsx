import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { ActionLink } from "../actions/ActionLink"
import { SectionHeader } from "./SectionHeader"

describe("SectionHeader", () => {
  it("labels its section with a level-two heading", () => {
    render(
      <section aria-labelledby="tools-heading">
        <SectionHeader headingId="tools-heading">Tools</SectionHeader>
      </section>,
    )

    expect(screen.getByRole("heading", { level: 2, name: "Tools" })).toHaveAttribute("id", "tools-heading")
    expect(screen.getByRole("region", { name: "Tools" })).toBeVisible()
  })

  it("renders an optional action", () => {
    render(
      <SectionHeader
        action={
          <ActionLink href="/projects" variant="compact">
            View all
          </ActionLink>
        }
      >
        Works
      </SectionHeader>,
    )

    expect(screen.getByRole("link", { name: "View all" })).toHaveAttribute("href", "/projects")
  })

  it("supports a muted heading tone", () => {
    render(<SectionHeader tone="muted">Project information</SectionHeader>)

    expect(screen.getByRole("heading", { level: 2, name: "Project information" })).toHaveClass("text-foreground-muted")
  })

  it("preserves native header attributes", () => {
    render(
      <SectionHeader aria-label="Tools section controls" data-section="tools">
        Tools
      </SectionHeader>,
    )

    expect(screen.getByRole("banner", { name: "Tools section controls" })).toHaveAttribute("data-section", "tools")
  })
})
