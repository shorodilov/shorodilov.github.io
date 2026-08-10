import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { ProjectCard } from "./ProjectCard"

const cover = "/images/spatial-data-portal.jpg"

describe("ProjectCard", () => {
  it("renders a named project link", () => {
    render(<ProjectCard cover={cover} href="/projects/spatial-data-portal" title="Spatial Data Portal" />)

    const link = screen.getByRole("link", { name: "Spatial Data Portal" })
    expect(link).toHaveAttribute("href", "/projects/spatial-data-portal")
  })

  it("keeps the cover and arrow decorative", () => {
    render(<ProjectCard cover={cover} href="/projects/spatial-data-portal" title="Spatial Data Portal" />)

    const link = screen.getByRole("link", { name: "Spatial Data Portal" })
    const image = link.querySelector("img")
    const arrow = link.querySelector("svg")

    expect(image).toHaveAttribute("alt", "")
    expect(image).toHaveAttribute("src", cover)
    expect(arrow).toHaveAttribute("aria-hidden", "true")
  })

  it("forwards native attributes and custom classes", () => {
    render(
      <ProjectCard
        aria-current="page"
        className="ring-1"
        cover={cover}
        data-testid="project-card"
        href="/projects/spatial-data-portal"
        title="Spatial Data Portal"
      />,
    )

    const link = screen.getByTestId("project-card")
    expect(link).toHaveAttribute("aria-current", "page")
    expect(link).toHaveClass("ring-1")
  })
})
