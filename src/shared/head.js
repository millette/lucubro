// npm
import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

const Head = ({
  data,
  _frontmatter,
  lang = "en-us",
  title,
  excerpt,
  ...props
}) => {
  if (!title) {
    if (_frontmatter && _frontmatter.title) {
      title = _frontmatter.title
    } else if (data && data.site.siteMetadata.title) {
      title = data.site.siteMetadata.title
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
  _frontmatter: PropTypes.object,
  data: PropTypes.object,
}

export default Head
