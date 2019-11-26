// npm
import React from "react"
import { css, Styled } from "theme-ui"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

// self
import Header from "./header"

const BlogLayout = ({ children, ...props }) => (
  <Styled.root>
    <Helmet htmlAttributes={{ style: { overflowY: "scroll" } }} />
    <Header {...props} />
    <div>
      <div
        css={css({
          px: 3,
          py: 4,
        })}
      >
        {children}
      </div>
    </div>
  </Styled.root>
)

BlogLayout.propTypes = {
  children: PropTypes.any.isRequired,
}

export default BlogLayout
