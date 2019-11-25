/** @jsx jsx */

// npm
import React from "react" // eslint-disable-line no-unused-vars
import { jsx, Styled } from "theme-ui"
import Prism from "@theme-ui/prism"
import PropTypes from "prop-types"

// self
import Link from "../components/link"
import ExternalLink from "../components/external-link"

const re = /^https{0,1}:\/\//

const MdxLink = ({ href, ...props }) =>
  re.test(href) ? (
    <ExternalLink {...props} to={href} />
  ) : (
    <Link {...props} to={href} />
  )

MdxLink.propTypes = {
  href: PropTypes.string.isRequired,
}

export default {
  a: MdxLink,
  pre: ({ children }) => children,
  code: Prism,
}
