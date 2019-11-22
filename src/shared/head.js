// npm
import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

const Head = ({ lang = "en-us", title, excerpt, ...props }) => {
  if (!title) {
    if (props._frontmatter && props._frontmatter.title) {
      title = props._frontmatter.title
    } else if (props.data && props.data.site.siteMetadata.title) {
      title = props.data.site.siteMetadata.title
    }
  }
  return (
    <Helmet
      {...props}
      htmlAttributes={{
        lang,
      }}
    >
      <title>{title || "UNEXPECTED --- MISSING TITLE"}</title>
      {excerpt && <meta name="description" content={excerpt} />}
    </Helmet>
  )
}

Head.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
}

export default Head
