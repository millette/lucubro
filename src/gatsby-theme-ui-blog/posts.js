/** @jsx jsx */

// npm
import { jsx, Styled, Flex, Box } from "theme-ui"
import PropTypes from "prop-types"

// self
import Layout from "../components/layout"
import Link from "../components/link"
import Intro from "../components/intro"

const Posts = ({ posts, ...props }) => (
  <Layout {...props}>
    <Flex>
      <Box
        sx={{
          width: ["100%", "66.67%"],
        }}
      >
        <Intro />
        <Styled.p>
          Find out more on the <Link to="about">about page</Link>.
        </Styled.p>
        <Styled.p sx={{ textAlign: "right" }}>
          Signed "Your host, <Styled.b>Robin Millette</Styled.b>"
        </Styled.p>
      </Box>
      <Box
        sx={{
          textAlign: "right",
          width: ["100%", "33.33%"],
        }}
      >
        <Styled.h2>Most recent first</Styled.h2>

        <Styled.ul>
          {posts.map((post) => (
            <Styled.li key={post.id}>
              <Link to={post.slug}>{post.title}</Link>
            </Styled.li>
          ))}
        </Styled.ul>
      </Box>
    </Flex>
  </Layout>
)

Posts.propTypes = {
  posts: PropTypes.array,
}

export default Posts
