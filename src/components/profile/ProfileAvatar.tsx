import * as React from "react"
import clsx from "clsx"
import { type Profile } from "../../data/profile"

export type ProfileAvatarSize = "compact" | "large"

export interface ProfileAvatarProps extends Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  "height" | "src" | "width"
> {
  size?: ProfileAvatarSize
  src: Profile["avatar"]
}

const sizeClassNames: Record<ProfileAvatarSize, string> = {
  compact: "size-28",
  large: "size-50",
}

const sizeDimensions: Record<ProfileAvatarSize, number> = {
  compact: 112,
  large: 200,
}

export const ProfileAvatar = ({ alt = "", className, size = "compact", src, ...props }: ProfileAvatarProps) => {
  const dimension = sizeDimensions[size]

  return (
    <img
      alt={alt}
      className={clsx("block shrink-0 rounded-round object-cover", sizeClassNames[size], className)}
      height={dimension}
      src={src}
      width={dimension}
      {...props}
    />
  )
}
