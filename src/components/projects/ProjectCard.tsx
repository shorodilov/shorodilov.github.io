import * as React from "react"
import clsx from "clsx"
import { type Project } from "../../data/project"

export interface ProjectCardProps extends Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "children" | "href" | "title"
> {
  cover: Project["cover"]
  href: string
  title: Project["title"]
}

const ArrowUpRightIcon = () => (
  <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24">
    <path
      d="M7 17 17 7M8 7h9v9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
    />
  </svg>
)

export const ProjectCard = ({ className, cover, href, title, ...props }: ProjectCardProps) => (
  <a
    className={clsx(
      "block w-full rounded-card bg-surface p-2 text-inherit no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
      className,
    )}
    href={href}
    {...props}
  >
    <span className="relative block aspect-video overflow-hidden rounded-control">
      <img
        alt=""
        className="size-full object-cover"
        decoding="async"
        height={360}
        loading="lazy"
        src={cover}
        width={640}
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.82),transparent_70%)]"
      />
      <span className="absolute top-3 right-3 text-on-media">
        <ArrowUpRightIcon />
      </span>
      <span className="absolute right-3 bottom-3 left-3 type-heading-2 break-words text-on-media">{title}</span>
    </span>
  </a>
)
