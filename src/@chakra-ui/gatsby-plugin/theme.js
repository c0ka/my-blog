// default file: node_modules/@chakra-ui/theme/dist/esm/index.js
// chakra structure the theme intu parts:
// direction, foundations, styles.global, components, config
// Also here we extend the styles.global setting upon the default not override.

import { extendTheme } from "@chakra-ui/react"
import { customColors } from "./color"

const customLayer = {
  // tesxtStyles & layerStyles
  layerStyles: {
    base: {
      bg: "gray.50",
      boader: "2px solid",
      boaderColor: "gray.500",
    },
    selected: {
      bg: "teal.500",
      color: "teal.700",
      boaderColor: "orange.500",
    },
  },
  // add typography token for Chinese fonts in theme
  fonts: {
    bodyZh:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "PingFang SC", "Lantinghei SC", "Microsoft Yahei", "WenQuanYi Micro Hei", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  // switch body's fontFamily
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "bodyZh",
        fontWeight: "normal",
      },
    }),
  },
  // Custom Color definition
  colors: customColors,
}

const customTheme = extendTheme(customLayer)

export default customTheme
