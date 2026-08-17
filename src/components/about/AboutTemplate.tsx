import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { AboutPage } from "./AboutPage"

type AboutTemplateProps = Omit<PageProps, "children"> & {
  children: React.ReactNode
}

export const AboutTemplate = ({ children }: AboutTemplateProps) => <AboutPage>{children}</AboutPage>

export const AboutHead: HeadFC = () => (
  <>
    <html data-theme="dark" />
    <title>About — Serhii Horodilov</title>
  </>
)
