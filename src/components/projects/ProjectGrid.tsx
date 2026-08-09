import * as React from "react"
import clsx from "clsx"
import { type Project } from "../../data/project"
import { ProjectCard } from "./ProjectCard"

export interface ProjectGridItem extends Pick<Project, "cover" | "slug" | "title"> {
    href: string
}

export interface ProjectGridProps extends Omit<React.HTMLAttributes<HTMLUListElement>, "children"> {
    projects: readonly ProjectGridItem[]
}

export const ProjectGrid = ({ className, projects, ...props }: ProjectGridProps) => (
    <ul
        className={clsx("grid list-none grid-cols-1 gap-2.5 p-0 md:grid-cols-2 md:gap-5", className)}
        role="list"
        {...props}
    >
        {projects.map(({ cover, href, slug, title }) => (
            <li key={slug}>
                <ProjectCard cover={cover} href={href} title={title} />
            </li>
        ))}
    </ul>
)
