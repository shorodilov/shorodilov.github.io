import * as React from "react"
import { AboutPage } from "../components/about/AboutPage"

const AboutTemplate = ({ children }) => <AboutPage>{children}</AboutPage>

export default AboutTemplate

export const Head = () => <title>About — Serhii Horodilov</title>
