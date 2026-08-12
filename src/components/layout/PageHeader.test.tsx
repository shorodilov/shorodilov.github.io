import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { PageHeader } from "./PageHeader"

describe("PageHeader", () => {
  it("renders the page title and optional side slots", () => {
    render(<PageHeader leading={<a href="/">Back</a>} title="About" trailing={<button type="button">Theme</button>} />)

    expect(screen.getByRole("heading", { level: 1, name: "About" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Back" })).toHaveAttribute("href", "/")
    expect(screen.getByRole("button", { name: "Theme" })).toBeInTheDocument()
  })

  it("supports an omitted title and forwards native attributes", () => {
    render(<PageHeader aria-label="Project controls" className="project-header" data-page="project" />)

    const header = screen.getByRole("banner", { name: "Project controls" })
    expect(header).toHaveAttribute("data-page", "project")
    expect(header).toHaveClass("project-header")
    expect(screen.queryByRole("heading", { level: 1 })).not.toBeInTheDocument()
  })
})
