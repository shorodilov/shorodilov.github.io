import * as React from "react"
import clsx from "clsx"
import { type Project } from "../../data/project"
import { ProjectCard } from "./ProjectCard"

export interface ProjectGridItem extends Pick<Project, "cover" | "slug" | "title"> {
  href: string
}

export type ProjectGridLayout = "grid" | "preview"

export interface ProjectGridProps extends Omit<React.HTMLAttributes<HTMLUListElement>, "children"> {
  layout?: ProjectGridLayout
  projects: readonly ProjectGridItem[]
}

const layoutClassNames: Record<ProjectGridLayout, string> = {
  grid: "grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-5",
  preview:
    "grid-flow-col auto-cols-[min(80vw,20rem)] grid-cols-none gap-2.5 overflow-x-auto pb-2 md:grid-flow-row md:auto-cols-auto md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0",
}

export const ProjectGrid = ({ className, layout = "grid", projects, ...props }: ProjectGridProps) => (
  <ul className={clsx("grid list-none p-0", layoutClassNames[layout], className)} role="list" {...props}>
    {projects.map(({ cover, href, slug, title }) => (
      <li key={slug}>
        <ProjectCard cover={cover} href={href} title={title} />
      </li>
    ))}
  </ul>
)
