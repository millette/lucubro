// npm
import React from "react"
import { Styled } from "theme-ui"
import PropTypes from "prop-types"

const ExternalLink = ({ to, ...props }) => (
  <Styled.a {...props} target="_blank" rel="noopener noreferrer" href={to} />
)

ExternalLink.propTypes = {
  to: PropTypes.string.isRequired,
}

export default ExternalLink
