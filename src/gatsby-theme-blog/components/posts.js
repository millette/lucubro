// npm
import React, { Fragment } from "react"
import { Styled, css, Container, Main } from "theme-ui"
import Layout from "gatsby-theme-blog/src/components/layout"
import Seo from "gatsby-theme-blog/src/components/seo"
import PropTypes from "prop-types"

// self
import Footer from "../components/home-footer"
import Link from "../../components/link"

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <Main>
      <Container>
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          const keywords = node.keywords || []
          return (
            <Fragment key={node.slug}>
              <Seo title="Home" keywords={keywords} />
              <div>
                <Styled.h2
                  css={css({
                    mb: 1,
                  })}
                >
                  <Link
                    as={Link}
                    css={{
                      textDecoration: `none`,
                    }}
                    to={node.slug}
                  >
                    {title}
                  </Link>
                </Styled.h2>
                <small>{node.date}</small>
                <Styled.p>{node.excerpt}</Styled.p>
              </div>
            </Fragment>
          )
        })}
      </Container>
    </Main>
    <Footer socialLinks={socialLinks} />
  </Layout>
)

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  siteTitle: PropTypes.string.isRequired,
  socialLinks: PropTypes.array,
}

export default Posts
