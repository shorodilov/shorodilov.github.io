import { AboutHead, AboutTemplate } from "../components/about/AboutTemplate"

// Gatsby parses MDX layout templates before the TypeScript transform.
// Keep this bridge valid JavaScript syntax while exporting typed code.
export default AboutTemplate

export const Head = AboutHead
