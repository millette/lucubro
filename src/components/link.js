// npm
import React from "react"
import { Link } from "gatsby"
import { Styled } from "theme-ui"
import PropTypes from "prop-types"

const StyledLink = ({ to, ...props }) => (
  <Styled.a {...props} to={to} as={Link} />
)

StyledLink.propTypes = {
  to: PropTypes.string.isRequired,
}

export default StyledLink
