/** @jsx jsx */
// npm
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { Layout } from "gatsby-theme-ui-layout"
import PropTypes from "prop-types"

const Posts = ({ posts, ...props }) => (
  <Styled.root>
    <Layout {...props}>
      <h1>Hello world!</h1>

      <ul>
        <li>
          <Link to="/style-guide">Style guide</Link>
        </li>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  </Styled.root>
)

Posts.propTypes = {
  posts: PropTypes.array,
}

export default Posts
