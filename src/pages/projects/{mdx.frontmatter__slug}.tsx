import { graphql } from "gatsby"
import { ProjectHead, ProjectTemplate } from "../../components/projects/ProjectTemplate"

export default ProjectTemplate

export const Head = ProjectHead

export const query = graphql`
  query ($id: String!) {
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
