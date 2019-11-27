// npm
import deepmerge from "deepmerge"
// themes with dark mode: system, future, tosh
import { future as theme } from "@theme-ui/presets"
import prism from "@theme-ui/prism/presets/theme-ui"

// self
import themes from "./themes"

themes.forEach((t, i) => (theme.colors.modes[`custom-${i}`] = t))

export default deepmerge(theme, {
  useColorSchemeMediaQuery: true,
  styles: {
    pre: prism,
  },
})
