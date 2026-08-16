import * as React from "react"
import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"
import { type Project } from "../../data/project"
import { type Tool } from "../../data/tool/types"
import { ProjectDetailPage } from "./ProjectDetailPage"

const project: Project = {
  slug: "sample-project",
  title: "Sample Project",
  cover: "/images/sample-project.jpg",
  tools: ["python", "django"],
  summary: "A sample project used to verify the detail presentation.",
  responsibilities: ["Design the service architecture.", "Implement the project backend."],
}

const tools: readonly Tool[] = [
  { id: "python", label: "Python", icon: "/icons/python.svg" },
  { id: "django", label: "Django", icon: "/icons/django.svg" },
]

describe("ProjectDetailPage", () => {
  it("composes project metadata, MDX content, and shared page controls", () => {
    render(
      <ProjectDetailPage project={project} tools={tools}>
        <p>Long-form project information</p>
      </ProjectDetailPage>,
    )

    expect(screen.getByRole("heading", { level: 1, name: project.title })).toBeInTheDocument()
    screen.getAllByRole("link", { name: "Back to homepage" }).forEach((link) => {
      expect(link).toHaveAttribute("href", "/")
    })
    expect(screen.getByRole("main")).toHaveTextContent("Long-form project information")
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
  })

  it("renders resolved tools in source order", () => {
    render(
      <ProjectDetailPage project={project} tools={tools}>
        Project body
      </ProjectDetailPage>,
    )

    const toolList = screen.getByRole("list", { name: "Project tools" })
    expect(
      within(toolList)
        .getAllByRole("img")
        .map((image) => image.getAttribute("alt")),
    ).toEqual(["Python", "Django"])
  })

  it("renders every project responsibility", () => {
    render(
      <ProjectDetailPage project={project} tools={tools}>
        Project body
      </ProjectDetailPage>,
    )

    const responsibilities = screen.getByRole("list", { name: "Project responsibilities" })
    project.responsibilities.forEach((responsibility) => {
      expect(within(responsibilities).getByText(responsibility)).toBeInTheDocument()
    })
  })

  it("keeps theme selection local to the project page shell", async () => {
    const user = userEvent.setup()
    render(
      <ProjectDetailPage project={project} tools={tools}>
        Project body
      </ProjectDetailPage>,
    )

    const page = screen.getByTestId("project-detail-page")
    expect(page).toHaveAttribute("data-theme", "dark")

    await user.click(screen.getByRole("radio", { name: "Light" }))

    expect(page).toHaveAttribute("data-theme", "light")
  })
})
