// npm
import React from "react"
import { css, Styled, Flex, Footer, Container } from "theme-ui"
import PropTypes from "prop-types"

// self
import Bio from "../components/bio"
import Link from "../../components/link"

const PostFooter = ({ previous, next }) => (
  <Footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    <Container>
      <Styled.hr />
      <Bio />
      {(previous || next) && (
        <Flex
          as="ul"
          css={css({
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          })}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </Flex>
      )}
    </Container>
  </Footer>
)

PostFooter.propTypes = {
  previous: PropTypes.object,
  next: PropTypes.object,
}

export default PostFooter
