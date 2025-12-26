// prettier.config.ts
import { type Config } from "prettier"

const config: Config = {
    arrowParens: "always",
    bracketSpacing: true,
    quoteProps: "consistent",
    semi: false,
    singleQuote: false,
    trailingComma: "all",
    plugins: ["prettier-plugin-tailwindcss"],
}

export default config
