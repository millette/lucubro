// npm
import deepmerge from "deepmerge"
import { tosh as theme } from '@theme-ui/presets'
import prism from '@theme-ui/prism/presets/github.json'

export default deepmerge(theme, {
  styles: {
    pre: {
      ...prism
    }
  }
})

