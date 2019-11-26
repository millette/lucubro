// npm
import React from "react"
import { Main, Container } from "theme-ui"
import Seo from "gatsby-theme-blog/src/components/seo"
import PropTypes from "prop-types"

// self
import Layout from "../gatsby-theme-blog/components/layout"
import PostFooter from "../gatsby-theme-blog/components/post-footer"

// FIXME: hardcoded title and description...
const MdxLayout = ({ location, children, _frontmatter: { title } }) => (
  <Layout location={location} title="I still have a project">
    <Seo
      title={title}
      description="My 30 year journey coding hundreds of projects."
    />
    <Main>
      <Container>{children}</Container>
    </Main>
    <PostFooter />
  </Layout>
)

MdxLayout.propTypes = {
  location: PropTypes.object,
  children: PropTypes.any.isRequired,
  _frontmatter: PropTypes.object.isRequired,
}

export default MdxLayout
