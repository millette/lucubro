// npm
import React, { Fragment } from "react"
import { Styled, css, Footer, Container } from "theme-ui"
import PropTypes from "prop-types"

const HomeFooter = ({ socialLinks }) => (
  <Footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    <Container>
      © 2019 Robin Millette. Powered by Gatsby &bull;{" "}
      {socialLinks.map((platform, i, arr) => (
        <Fragment key={platform.url}>
          <Styled.a
            href={platform.url}
            target="_blank"
            rel="me noopener noreferrer"
          >
            {platform.name}
          </Styled.a>
          {arr.length - 1 !== i && <> &bull; </>}
        </Fragment>
      ))}
    </Container>
  </Footer>
)

HomeFooter.propTypes = {
  socialLinks: PropTypes.array,
}

export default HomeFooter
