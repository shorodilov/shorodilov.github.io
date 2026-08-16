import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"
import { profile } from "../../data/profile"
import { type ProjectGridItem } from "../projects/ProjectGrid"
import { HomePage } from "./HomePage"

const projects: readonly ProjectGridItem[] = [
  {
    slug: "field-data-collection-kit",
    title: "Field Data Collection Kit",
    cover: "/images/field-data-collection-kit.jpg",
    href: "/projects/field-data-collection-kit",
  },
  {
    slug: "real-estate-data-pipelines",
    title: "Real-Estate Data Pipelines",
    cover: "/images/real-estate-data-pipelines.jpg",
    href: "/projects/real-estate-data-pipelines",
  },
]

describe("HomePage", () => {
  it("composes profile, tools, routed project previews, and the shared footer", () => {
    render(<HomePage projects={projects} />)

    expect(screen.getByText("Serhii Horodilov")).toBeInTheDocument()
    expect(screen.getByRole("list", { name: "Selected tools" })).toBeInTheDocument()
    expect(screen.getByRole("contentinfo")).toHaveTextContent("© 2024 Copyright")

    projects.forEach((project) => {
      expect(screen.getByRole("link", { name: project.title })).toHaveAttribute("href", project.href)
    })

    const aboutSection = screen.getByRole("heading", { name: "About" }).closest("section")
    expect(aboutSection).toHaveTextContent(profile.summary)

    const viewAllLinks = screen.getAllByRole("link", { name: "View all" })
    expect(viewAllLinks.map((link) => link.getAttribute("href"))).toEqual(["/tools", "/about", "/projects"])
  })

  it("opens and closes the mobile navigation presentation", async () => {
    const user = userEvent.setup()
    render(<HomePage projects={projects} />)

    await user.click(screen.getByRole("button", { name: "Open navigation menu" }))

    const navigation = screen.getByRole("navigation", { name: "Primary navigation" })
    expect(navigation).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "/about")
    expect(screen.getByRole("link", { name: "Tools" })).toHaveAttribute("href", "/tools")
    expect(screen.getByRole("link", { name: "Works" })).toHaveAttribute("href", "/projects")

    const closeButtons = screen.getAllByRole("button", { name: "Close navigation menu" })
    await user.click(closeButtons[closeButtons.length - 1])

    expect(screen.queryByRole("navigation", { name: "Primary navigation" })).not.toBeInTheDocument()
  })

  it("keeps theme selection local to the homepage shell", async () => {
    const user = userEvent.setup()
    render(<HomePage projects={projects} />)

    const page = screen.getByTestId("home-page")
    expect(page).toHaveAttribute("data-theme", "dark")

    await user.click(screen.getAllByRole("radio", { name: "Light" })[0])

    expect(page).toHaveAttribute("data-theme", "light")
  })
})
