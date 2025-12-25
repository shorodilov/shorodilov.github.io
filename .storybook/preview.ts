// @ts-ignore
import type { Preview } from "@storybook/react-webpack5"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
}
// noinspection JSUnusedGlobalSymbols
export default preview
