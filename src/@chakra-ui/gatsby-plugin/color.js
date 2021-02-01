import { theme as defaultTheme } from "@chakra-ui/theme"
import { getColor } from "@chakra-ui/theme-tools"

export const customColors = {
  primaryLight: getColor(defaultTheme, "Blue.500", "#3182CE"),
  primaryDark: getColor(defaultTheme, "Red.300", "#FC8181"),
  secondary: "#B2B2B2",
  success: getColor(defaultTheme, "Green.300", "#68D391"),
  fail: getColor(defaultTheme, "Red.300", "#FC8118"),
  turquoise: getColor(defaultTheme, "Teal.100", "#B2F5EA"),
  yellow: "#FFF8DF",
  mint: "#E1FEFA",
  gridYellow: "#FFE78E",
  gridRed: "#EF7D7D",
  gridBlue: "#A7D0F4",
  gridPink: "#FFA1C3",
}
