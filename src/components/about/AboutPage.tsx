import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import { PageFooter } from "../layout/PageFooter"
import { PageHeader } from "../layout/PageHeader"
import { PageLayout } from "../layout/PageLayout"
import { BackLink } from "../navigation/BackLink"

export interface AboutPageProps {
  children: React.ReactNode
}

const aboutMdxComponents = {
  h1: () => null,
}

export const AboutPage = ({ children }: AboutPageProps) => (
  <PageLayout className="flex min-h-dvh flex-col" data-testid="about-page" data-theme="dark">
    <PageHeader leading={<BackLink aria-label="Back to homepage" href="/" />} title="About" />

    <main className="flex-1 px-page-gutter pt-2 pb-section md:pt-8">
      <MDXProvider components={aboutMdxComponents}>
        <article className="mx-auto w-full max-w-readable type-body text-foreground [&>h2]:mt-8 [&>h2]:mb-3 [&>h2]:type-heading-2 [&>h3]:mt-6 [&>h3]:mb-2 [&>h3]:type-heading-4-caps [&>ol]:my-0 [&>ol]:list-decimal [&>ol]:pl-5 [&>p]:m-0 [&>p+p]:mt-2.5 [&>ul]:my-0 [&>ul]:list-disc [&>ul]:pl-5 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4">
          {children}
        </article>
      </MDXProvider>
    </main>

    <PageFooter className="px-page-gutter pb-5" />
  </PageLayout>
)
