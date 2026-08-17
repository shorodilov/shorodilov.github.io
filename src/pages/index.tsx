import * as React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import { HomePage } from "../components/home/HomePage"
import { type ProjectGridItem } from "../components/projects/ProjectGrid"

interface HomePageQueryData {
  allFile: {
    nodes: Array<{
      childMdx: {
        frontmatter: {
          cover: string
          slug: string
          title: string
        }
      }
    }>
  }
}

const IndexPage = ({ data }: PageProps<HomePageQueryData>) => {
  const projects: ProjectGridItem[] = data.allFile.nodes.map(({ childMdx: { frontmatter } }) => ({
    cover: frontmatter.cover,
    href: `/projects/${frontmatter.slug}`,
    slug: frontmatter.slug,
    title: frontmatter.title,
  }))

  return <HomePage projects={projects} />
}

export default IndexPage

export const query = graphql`
  query HomePageProjects {
    allFile(filter: { sourceInstanceName: { eq: "projects" }, extension: { eq: "mdx" } }) {
      nodes {
        childMdx {
          frontmatter {
            cover
            slug
            title
          }
        }
      }
    }
  }
`

export const Head: HeadFC = () => (
  <>
    <html data-theme="dark" />
    <title>Serhii Horodilov — Software Engineer</title>
  </>
)
