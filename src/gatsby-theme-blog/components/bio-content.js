// npm
import React from "react"
import { Styled } from "theme-ui"
import PropTypes from "prop-types"

// self
import Link from "../../components/external-link"

const BioContent = ({ author, siteUrl }) => (
  <Styled.p>
    Words by <Link to={siteUrl}>{author}</Link>.
    <br />
    Change me. This is all quite default.
  </Styled.p>
)

BioContent.propTypes = {
  author: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired,
}

export default BioContent
