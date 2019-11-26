// npm
import React from "react"
import { css, Styled, Flex, Footer, Container } from "theme-ui"

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
          css={{
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
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

export default PostFooter
