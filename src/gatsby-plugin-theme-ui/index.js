// npm
import deepmerge from "deepmerge"
// themes with dark mode: system, future, tosh
import { future as theme } from "@theme-ui/presets"
import prism from "@theme-ui/prism/presets/theme-ui"

export default deepmerge(theme, {
  useColorSchemeMediaQuery: true,
  styles: {
    pre: prism,
  },
})
