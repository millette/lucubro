import React from "react"
import { Styled, css, Main, Container } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "gatsby-theme-blog/src/components/seo"

// self
import Layout from "../components/layout"
import PostFooter from "./post-footer"

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={title}>
    <SEO title={post.title} description={post.excerpt} />
    <Main>
      <Container>
        <Styled.h1>{post.title}</Styled.h1>
        <Styled.p
          css={css({
            fontSize: 1,
            mt: -3,
            mb: 3,
          })}
        >
          {post.date}
        </Styled.p>
        <MDXRenderer>{post.body}</MDXRenderer>
      </Container>
    </Main>
    <PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post
