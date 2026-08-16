import { graphql } from "gatsby"
import { ProjectHead, ProjectTemplate } from "../components/projects/ProjectTemplate"

// Gatsby parses MDX layout templates before the TypeScript transform.
// Keep this bridge valid JavaScript syntax while exporting typed code.
export default ProjectTemplate

export const Head = ProjectHead

export const query = graphql`
  query ProjectDetail($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        slug
        title
        cover
        tools
        summary
        responsibilities
      }
    }
  }
`
