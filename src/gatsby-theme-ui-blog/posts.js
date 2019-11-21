/** @jsx jsx */

// npm
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"

// self
import Layout from "../shared/layout"

const Posts = ({ posts, ...props }) => (
  <Layout {...props}>
    <Styled.h1>Hello world!</Styled.h1>

    <Styled.ul>
      {posts.map((post) => (
        <Styled.li key={post.id}>
          <Link to={post.slug}>{post.title}</Link>
        </Styled.li>
      ))}
    </Styled.ul>
  </Layout>
)

Posts.propTypes = {
  posts: PropTypes.array,
}

export default Posts
