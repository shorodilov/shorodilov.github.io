import * as React from "react"
import { type Project } from "../../data/project"
import { type Tool } from "../../data/tool/types"
import { PageFooter } from "../layout/PageFooter"
import { PageHeader } from "../layout/PageHeader"
import { PageLayout } from "../layout/PageLayout"
import { BackLink } from "../navigation/BackLink"
import { ThemeToggle, type ColorTheme } from "../preferences/ThemeToggle"
import { SectionHeader } from "../sections/SectionHeader"
import { ToolGrid } from "../tools/ToolGrid"

export interface ProjectDetailPageProps {
  children: React.ReactNode
  project: Project
  tools: readonly Tool[]
}

export const ProjectDetailPage = ({ children, project, tools }: ProjectDetailPageProps) => {
  const [theme, setTheme] = React.useState<ColorTheme>("dark")

  return (
    <PageLayout className="flex min-h-dvh flex-col" data-testid="project-detail-page" data-theme={theme}>
      <PageHeader
        className="hidden border-b border-border md:grid"
        leading={<BackLink aria-label="Back to homepage" href="/" />}
        trailing={<ThemeToggle onThemeChange={setTheme} theme={theme} />}
      />

      <main className="flex-1 md:grid md:grid-cols-[minmax(18rem,34%)_1px_minmax(0,1fr)] md:gap-x-10 md:px-page-gutter md:pt-[3.75rem] md:pb-section">
        <h1 className="sr-only md:not-sr-only md:col-start-3 md:row-start-1 md:m-0 md:type-heading-3">
          {project.title}
        </h1>

        <div className="md:col-start-1 md:row-start-1">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-t-shell md:rounded-card">
            <img alt="" className="size-full object-cover" decoding="async" src={project.cover} />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.78),transparent_58%)] md:hidden"
            />
            <BackLink
              aria-label="Back to homepage"
              className="absolute top-4 left-2 z-10 text-on-media md:hidden"
              href="/"
            />
            <div
              aria-hidden="true"
              className="absolute right-5 bottom-5 left-5 type-heading-3 break-words text-on-media md:hidden"
            >
              {project.title}
            </div>
          </div>

          <section aria-labelledby="project-tools-heading" className="mt-6 px-5 md:mt-10 md:px-0">
            <SectionHeader headingId="project-tools-heading" size="compact" tone="muted">
              Tools
            </SectionHeader>
            <ToolGrid aria-label="Project tools" className="mt-4" tools={tools} />
          </section>
        </div>

        <div aria-hidden="true" className="hidden bg-border md:col-start-2 md:row-start-1 md:block" />

        <div className="mt-9 px-5 md:col-start-3 md:row-start-1 md:mt-0 md:px-0 md:pt-16">
          <section aria-labelledby="project-information-heading">
            <SectionHeader headingId="project-information-heading" size="compact" tone="muted">
              Project information
            </SectionHeader>
            <article className="mt-4 type-body text-foreground [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&>h2]:mt-8 [&>h2]:mb-3 [&>h2]:type-heading-2 [&>h3]:mt-6 [&>h3]:mb-2 [&>h3]:type-heading-4-caps [&>ol]:my-0 [&>ol]:list-decimal [&>ol]:pl-5 [&>p]:m-0 [&>p+p]:mt-2.5 [&>ul]:my-0 [&>ul]:list-disc [&>ul]:pl-5">
              {children}
            </article>
          </section>

          <section aria-labelledby="project-responsibilities-heading" className="mt-9 md:mt-8">
            <SectionHeader headingId="project-responsibilities-heading" size="compact" tone="muted">
              Responsibilities
            </SectionHeader>
            <ul aria-label="Project responsibilities" className="mt-4 list-none space-y-2 p-0">
              {project.responsibilities.map((responsibility) => (
                <li className="flex items-start gap-3 type-body text-foreground" key={responsibility}>
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-round bg-accent" />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <PageFooter className="mt-20 px-page-gutter pb-5 md:mt-auto" />
    </PageLayout>
  )
}
