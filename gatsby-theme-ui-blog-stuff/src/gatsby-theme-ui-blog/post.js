/** @jsx jsx */

// npm
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"

// self
import Layout from "../components/layout"

const Post = ({
  state,
  title,
  date,
  excerpt,
  children,
  keywords,
  tags,
  ...props
}) => (
  <Layout title={title} excerpt={excerpt} {...props}>
    <Styled.h1>{title}</Styled.h1>
    <div>{date}</div>
    <Styled.h2>*{state}*</Styled.h2>
    {children}
  </Layout>
)

Post.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
  keywords: PropTypes.array,
  tags: PropTypes.array,
  children: PropTypes.any,
}

export default Post
