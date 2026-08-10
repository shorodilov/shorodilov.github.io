// prettier.config.ts
import { type Config } from "prettier"
import { type PluginOptions } from "prettier-plugin-tailwindcss"

const config: Config & PluginOptions = {
  arrowParens: "always",
  bracketSpacing: true,
  quoteProps: "consistent",
  semi: false,
  singleQuote: false,
  trailingComma: "all",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/styles/global.css",
}

export default config
