import * as React from "react"
import clsx from "clsx"
import { type Tool } from "../../data/tool/types"
import { ToolBadge } from "./ToolBadge"

export interface ToolGridProps extends Omit<React.HTMLAttributes<HTMLUListElement>, "children"> {
    tools: readonly Tool[]
}

export const ToolGrid = ({ className, tools, ...props }: ToolGridProps) => (
    <ul className={clsx("flex list-none flex-wrap gap-2 p-0", className)} role="list" {...props}>
        {tools.map(({ icon, id, label }) => (
            <li key={id}>
                <ToolBadge icon={icon} label={label} />
            </li>
        ))}
    </ul>
)
