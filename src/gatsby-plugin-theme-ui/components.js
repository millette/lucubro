// npm
import Prism from "@theme-ui/prism"

// self
import Layout from "../shared/layout"

export default {
  wrapper: Layout,
  pre: ({ children }) => children,
  code: Prism,
}
