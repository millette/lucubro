// npm
import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"
import PropTypes from "prop-types"

const Footer = ({ socialLinks }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
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
  </footer>
)

Footer.propTypes = {
  socialLinks: PropTypes.array,
}

export default Footer
