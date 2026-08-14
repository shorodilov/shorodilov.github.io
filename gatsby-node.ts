import type { GatsbyNode } from "gatsby"
import { createRemoteFileNode } from "gatsby-source-filesystem"

const ABOUT_SOURCE_URL = "https://raw.githubusercontent.com/shorodilov/shorodilov/main/README.md"

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
