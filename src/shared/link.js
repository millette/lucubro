/** @jsx jsx */

// npm
import React from "react" // eslint-disable-line no-unused-vars
import { Link } from "gatsby"
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"

const StyledLink = ({ to, href, ...props }) => (
  <Styled.a {...props} to={to || href} as={Link} />
)

StyledLink.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
}

export default StyledLink
