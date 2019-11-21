/** @jsx jsx */

// npm
import { jsx, Styled } from "theme-ui"

// self
import Layout2 from "../shared/layout"

const Layout = (props) => (
  <Styled.root>
    <Layout2 {...props} />
  </Styled.root>
)

export default Layout
