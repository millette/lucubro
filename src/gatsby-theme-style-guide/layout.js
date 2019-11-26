// npm
import React from "react"
import PropTypes from "prop-types"

// self
import MdxLayout from "../components/mdx-layout"

const StyleGuideLayout = ({ children }) => (
  <MdxLayout _frontmatter={{ title: "Style Guide" }}>{children}</MdxLayout>
)

StyleGuideLayout.propTypes = {
  children: PropTypes.any.isRequired,
}

export default StyleGuideLayout
