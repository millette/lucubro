/** @jsx jsx */

// npm
import React from "react" // eslint-disable-line no-unused-vars
import { jsx, Styled } from "theme-ui"
import Prism from "@theme-ui/prism"
import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"

const re = /^https{0,1}:\/\//

const Link = ({ href, ...props }) =>
  re.test(href) ? (
    <Styled.a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    />
  ) : (
    <GatsbyLink {...props} to={href} />
  )

Link.propTypes = {
  href: PropTypes.string.isRequired,
}

export default {
  a: Link,
  pre: ({ children }) => children,
  code: Prism,
}
