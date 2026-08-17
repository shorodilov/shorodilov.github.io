import { type Project } from "../../data/project"
import { tools } from "../../data/tool/tools"
import { type Tool } from "../../data/tool/types"

const toolsById = new Map(tools.map((tool) => [tool.id, tool]))

export const resolveProjectTools = (project: Pick<Project, "slug" | "tools">): Tool[] =>
  project.tools.map((toolId) => {
    const tool = toolsById.get(toolId)

    if (!tool) {
      throw new Error(`Project "${project.slug}" references unknown tool "${toolId}"`)
    }

    return tool
  })
