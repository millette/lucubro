// npm
import React from "react"
import Prism from "@theme-ui/prism"
import PropTypes from "prop-types"
import { withPrefix } from "gatsby"

// self
import Link from "../components/link"
import ExternalLink from "../components/external-link"

const re = /^\//

// Workaround: path prefix was getting added twice
const gogo = withPrefix().length - 1
const sss = gogo ? (x) => x.slice(gogo) : (x) => x

const MdxLink = ({ href, ...props }) =>
  re.test(href) ? (
    <Link {...props} to={sss(href)} />
  ) : (
    <ExternalLink {...props} to={href} />
  )

MdxLink.propTypes = {
  href: PropTypes.string.isRequired,
}

export default {
  a: MdxLink,
  pre: ({ children }) => children,
  code: Prism,
}
