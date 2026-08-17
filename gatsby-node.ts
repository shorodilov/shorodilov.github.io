import path from "node:path"
import type { GatsbyNode } from "gatsby"
import { createRemoteFileNode } from "gatsby-source-filesystem"

const ABOUT_SOURCE_URL = "https://raw.githubusercontent.com/shorodilov/shorodilov/main/README.md"
const ABOUT_TEMPLATE = path.resolve("./src/templates/about.tsx")
const PROJECT_TEMPLATE = path.resolve("./src/templates/project.tsx")

interface AboutContentQueryData {
  file: {
    childMdx: {
      internal: {
        contentFilePath: string
      }
    } | null
  } | null
}

interface ProjectContentQueryData {
  allFile: {
    nodes: Array<{
      childMdx: {
        id: string
        frontmatter: {
          slug: string
        }
        internal: {
          contentFilePath: string
        }
      } | null
    }>
  }
}

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({ actions: { createNode }, createNodeId, getCache }) => {
  try {
    await createRemoteFileNode({
      url: ABOUT_SOURCE_URL,
      createNode,
      createNodeId,
      getCache,
      name: "about",
      ext: ".md",
    })
  } catch (error) {
    throw new Error(`Failed to source canonical About content from ${ABOUT_SOURCE_URL}`, { cause: error })
  }
}

export const createPages: GatsbyNode["createPages"] = async ({ actions: { createPage }, graphql }) => {
  const aboutResult = await graphql<AboutContentQueryData>(`
    query AboutContent {
      file(name: { eq: "about" }, extension: { eq: "md" }, sourceInstanceName: { eq: "__PROGRAMMATIC__" }) {
        childMdx {
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (aboutResult.errors) {
    throw new Error("Failed to query canonical About content", { cause: aboutResult.errors })
  }

  const aboutContent = aboutResult.data?.file?.childMdx

  if (!aboutContent) {
    throw new Error("Canonical About content was not transformed to MDX")
  }

  createPage({
    path: "/about",
    component: `${ABOUT_TEMPLATE}?__contentFilePath=${aboutContent.internal.contentFilePath}`,
  })

  const projectsResult = await graphql<ProjectContentQueryData>(`
    query ProjectContent {
      allFile(filter: { sourceInstanceName: { eq: "projects" }, extension: { eq: "mdx" } }) {
        nodes {
          childMdx {
            id
            frontmatter {
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `)

  if (projectsResult.errors) {
    throw new Error("Failed to query project content", { cause: projectsResult.errors })
  }

  const projectFiles = projectsResult.data?.allFile.nodes

  if (!projectFiles) {
    throw new Error("Project content query returned no data")
  }

  projectFiles.forEach(({ childMdx }) => {
    if (!childMdx) {
      throw new Error("Project content was not transformed to MDX")
    }

    createPage({
      path: `/projects/${childMdx.frontmatter.slug}`,
      component: `${PROJECT_TEMPLATE}?__contentFilePath=${childMdx.internal.contentFilePath}`,
      context: {
        id: childMdx.id,
      },
    })
  })
}
