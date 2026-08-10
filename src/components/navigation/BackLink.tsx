import * as React from "react"
import clsx from "clsx"

export interface BackLinkProps extends Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "aria-label" | "children" | "href"
> {
  "aria-label": string
  "href": string
}

export const BackLink = ({ "aria-label": ariaLabel, className, href, ...props }: BackLinkProps) => (
  <a
    aria-label={ariaLabel}
    className={clsx(
      "inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-control text-foreground-muted no-underline transition-colors duration-150 hover:text-foreground focus-visible:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none",
      className,
    )}
    href={href}
    {...props}
  >
    <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
      <path
        d="M19 12H5m7 7-7-7 7-7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </a>
)
