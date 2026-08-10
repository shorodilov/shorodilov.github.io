import * as React from "react"
import { render, screen, within } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { type ProjectGridItem, ProjectGrid } from "./ProjectGrid"

const projects: readonly ProjectGridItem[] = [
  {
    slug: "spatial-data-portal",
    title: "Spatial Data Portal",
    cover: "/images/spatial-data-portal.jpg",
    href: "/projects/spatial-data-portal",
  },
  {
    slug: "infrastructure-dashboard",
    title: "Infrastructure Dashboard",
    cover: "/images/infrastructure-dashboard.jpg",
    href: "/projects/infrastructure-dashboard",
  },
  {
    slug: "deployment-automation",
    title: "Deployment Automation",
    cover: "/images/deployment-automation.jpg",
    href: "/projects/deployment-automation",
  },
]

describe("ProjectGrid", () => {
  it("renders every project as an accessible list item", () => {
    render(<ProjectGrid aria-label="Projects" projects={projects} />)

    const list = screen.getByRole("list", { name: "Projects" })
    const items = within(list).getAllByRole("listitem")

    expect(list).toHaveAttribute("role", "list")
    expect(items).toHaveLength(projects.length)
    projects.forEach((project, index) => {
      expect(within(items[index]).getByRole("link", { name: project.title })).toHaveAttribute("href", project.href)
    })
  })

  it("preserves project order and cover data", () => {
    render(<ProjectGrid aria-label="Projects" projects={projects} />)

    const links = screen.getAllByRole("link")

    expect(links.map((link) => link.textContent)).toEqual(projects.map(({ title }) => title))
    links.forEach((link, index) => {
      expect(link.querySelector("img")).toHaveAttribute("src", projects[index].cover)
    })
  })

  it("forwards native attributes and custom classes to the list", () => {
    render(
      <ProjectGrid aria-label="Selected projects" className="ring-1" data-testid="project-grid" projects={projects} />,
    )

    const list = screen.getByTestId("project-grid")
    expect(list).toHaveAttribute("aria-label", "Selected projects")
    expect(list).toHaveClass("ring-1")
  })

  it("supports an empty project collection", () => {
    render(<ProjectGrid aria-label="Projects" projects={[]} />)

    expect(screen.getByRole("list", { name: "Projects" })).toBeEmptyDOMElement()
  })
})
