// npm
import React from "react"
import { Main, Container } from "theme-ui"
import SEO from "gatsby-theme-blog/src/components/seo"

// self
import Layout from "../gatsby-theme-blog/components/layout"
import PostFooter from "../gatsby-theme-blog/components/post-footer"

const MdxLayout = ({ location, children, _frontmatter: { title } }) => (
  <Layout location={location} title="I still have a project">
    <SEO
      title={title}
      description="My 30 year journey coding hundreds of projects."
    />
    <Main>
      <Container>{children}</Container>
    </Main>
    <PostFooter />
  </Layout>
)

export default MdxLayout
