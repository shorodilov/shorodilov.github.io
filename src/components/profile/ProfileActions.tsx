import * as React from "react"
import clsx from "clsx"
import { type Profile } from "../../data/profile"
import { ActionLink } from "../actions/ActionLink"

export type ProfileActionsVariant = "featured" | "icons"

export interface ProfileActionsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  email: Profile["email"]
  github: Profile["github"]
  linkedin: Profile["linkedin"]
  variant?: ProfileActionsVariant
}

const LinkedInIcon = () => (
  <svg aria-hidden="true" className="size-4.5 shrink-0" fill="none" viewBox="0 0 20 20">
    <rect height="15" rx="2" stroke="currentColor" strokeWidth="1.5" width="15" x="2.5" y="2.5" />
    <circle cx="6.25" cy="7" fill="currentColor" r="1" />
    <path
      d="M5.5 9.25v5.25M9 14.5V9.25m0 2.25c.45-1.45 3.75-1.85 3.75.9v2.1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </svg>
)

const EmailIcon = () => (
  <svg aria-hidden="true" className="size-5 shrink-0" fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3.6 7.2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </svg>
)

const GitHubIcon = () => (
  <svg aria-hidden="true" className="size-5 shrink-0" fill="none" viewBox="0 0 24 24">
    <path
      d="M9 19c-4.5 1.4-4.5-2.5-6-3m12 6v-3.9c.04-1-.36-1.95-1.1-2.6 3.6-.4 7.4-1.8 7.4-8a6.25 6.25 0 0 0-1.7-4.35A5.85 5.85 0 0 0 19.45 1S18.1.55 15 2.65a15 15 0 0 0-6 0C5.9.55 4.55 1 4.55 1a5.85 5.85 0 0 0-.15 2.15A6.25 6.25 0 0 0 2.7 7.5c0 6.2 3.8 7.6 7.4 8A4.7 4.7 0 0 0 9 18.1V22"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
)

export const ProfileActions = ({
  className,
  email,
  github,
  linkedin,
  variant = "featured",
  ...props
}: ProfileActionsProps) => {
  const iconOnly = variant === "icons"

  return (
    <div className={clsx("flex items-center justify-center gap-3", className)} {...props}>
      <ActionLink
        aria-label={iconOnly ? "LinkedIn profile" : undefined}
        className={iconOnly ? undefined : "w-52"}
        href={linkedin}
        variant={iconOnly ? "icon" : "primary"}
      >
        <LinkedInIcon />
        {!iconOnly && <span>LinkedIn</span>}
      </ActionLink>
      <ActionLink aria-label="Send email" href={`mailto:${email}`} variant="icon">
        <EmailIcon />
      </ActionLink>
      <ActionLink aria-label="GitHub profile" href={github} variant="icon">
        <GitHubIcon />
      </ActionLink>
    </div>
  )
}
