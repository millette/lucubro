/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

// self
import Layout from "../shared/layout"

const Layout2 = (props) => (
  <Styled.root><Layout {...props} /></Styled.root>
)

export default Layout2

