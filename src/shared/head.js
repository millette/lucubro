// npm
import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

const Head = ({ lang = "en-us", title, excerpt, ...props }) => (
  <Helmet
    {...props}
    htmlAttributes={{
      lang,
    }}
  >
    {title && <title>{title}</title>}
    {excerpt && <meta name="description" content={excerpt} />}
  </Helmet>
)

Head.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
}

export default Head
