import * as React from "react"
import { type HeadFC, type PageProps } from "gatsby"
import { type Project } from "../../data/project"
import { ProjectDetailPage } from "./ProjectDetailPage"
import { resolveProjectTools } from "./resolveProjectTools"

export interface ProjectTemplateQueryData {
  mdx: {
    frontmatter: Project
  } | null
}

type ProjectTemplateProps = Omit<PageProps<ProjectTemplateQueryData>, "children"> & {
  children: React.ReactNode
}

export const ProjectTemplate = ({ children, data }: ProjectTemplateProps) => {
  const project = data.mdx?.frontmatter

  if (!project) {
    throw new Error("Project detail page is missing project frontmatter")
  }

  return (
    <ProjectDetailPage project={project} tools={resolveProjectTools(project)}>
      {children}
    </ProjectDetailPage>
  )
}

export const ProjectHead: HeadFC<ProjectTemplateQueryData> = ({ data }) => {
  const projectTitle = data.mdx?.frontmatter?.title

  return <title>{projectTitle ? `${projectTitle} — Serhii Horodilov` : "Project — Serhii Horodilov"}</title>
}
