import * as React from "react"
import clsx from "clsx"
import { type Profile } from "../../data/profile"

export interface ProfileMetaProps extends Omit<React.HTMLAttributes<HTMLDListElement>, "children"> {
  languages: Profile["languages"]
  location: Profile["location"]
}

const LocationIcon = () => (
  <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 20 20" width="20">
    <path
      d="M10 18s6-5.1 6-10a6 6 0 1 0-12 0c0 4.9 6 10 6 10Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const LanguagesIcon = () => (
  <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 20 20" width="20">
    <path
      d="M3.5 17v-1.5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4V17M8.5 8.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M14.5 3.5c.75.55 1.25 1.45 1.25 2.5s-.5 1.95-1.25 2.5M16.75 2c1.05.95 1.75 2.35 1.75 4s-.7 3.05-1.75 4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </svg>
)

export const ProfileMeta = ({ className, languages, location, ...props }: ProfileMetaProps) => (
  <dl
    className={clsx(
      "m-0 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 type-caption text-foreground-muted",
      className,
    )}
    {...props}
  >
    <div className="flex items-center gap-1.5">
      <dt className="sr-only">Location</dt>
      <dd className="m-0 flex items-center gap-1.5">
        <LocationIcon />
        <span>{location}</span>
      </dd>
    </div>
    <div className="flex items-center gap-1.5">
      <dt className="sr-only">Languages</dt>
      <dd className="m-0 flex items-center gap-1.5">
        <LanguagesIcon />
        <span>{languages.join(", ")}</span>
      </dd>
    </div>
  </dl>
)
