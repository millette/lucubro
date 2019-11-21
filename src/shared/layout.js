/** @jsx jsx */

// npm
import { Link } from "gatsby"
import {
  jsx,
  useColorMode,
  Layout,
  Header,
  Main,
  Container,
  Footer,
  Flex,
  Box,
  Styled,
} from "theme-ui"
import PropTypes from "prop-types"

// self
import Head from "./head"

const OwnLayout = (props) => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <Layout>
      <Head {...props} />
      <Header>
        <Container>
          <Flex
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Styled.h1>
                <Link to="/">My own ham</Link>
              </Styled.h1>
            </Box>
            <Box>
              <button
                onClick={() => {
                  setColorMode(colorMode === "default" ? "dark" : "default")
                }}
              >
                Toggle {colorMode === "default" ? "Dark" : "Light"}
              </button>
            </Box>
          </Flex>
          <Flex
            sx={{
              justifyContent: "space-evenly",
            }}
          >
            <Box>
              <Link to="/about">About</Link>
            </Box>
            <Box>
              <Link to="/style-guide">Style guide</Link>
            </Box>
          </Flex>
        </Container>
      </Header>
      <Main>
        <Container>{props.children}</Container>
      </Main>

      <Footer>
        <Container>Footer...</Container>
      </Footer>
    </Layout>
  )
}

OwnLayout.propTypes = {
  children: PropTypes.any,
}

export default OwnLayout
