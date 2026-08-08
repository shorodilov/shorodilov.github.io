// @ts-expect-error StorybookConfig type resolution can fail in this Storybook config context; runtime import is valid.
import { type StorybookConfig } from "@storybook/react-webpack5"
import * as os from "node:os"

// noinspection JSUnusedGlobalSymbols
const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        {
            name: "@storybook/addon-styling-webpack",
            options: {
                rules: [
                    {
                        test: /\.css$/,
                        use: [
                            "style-loader",
                            {
                                loader: "css-loader",
                                options: { importLoaders: 1 },
                            },
                            "postcss-loader",
                        ],
                    },
                ],
            },
        },
        "@storybook/addon-a11y",
        "@storybook/addon-docs",
    ],
    framework: "@storybook/react-webpack5",
    webpackFinal: async (config: any, { cache }: any) => {
        if (os.platform() === "win32") {
            console.warn("⚠️  Storybook cache disabled for MS Windows to prevent EBUSY errors.")
            cache.set = () => Promise.resolve()
        }
        return config
    },
}
// noinspection JSUnusedGlobalSymbols
export default config
