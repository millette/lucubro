/** @jsx jsx */

// npm
import React from "react" // eslint-disable-line no-unused-vars
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
                <Link to="/">I still have a project</Link>
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
        <Container>
          {props.children}

          {props.data && (props.data.previous || props.data.next) && (
            <>
              <Styled.h3>More articles</Styled.h3>

              <Flex
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  {props.data && props.data.previous && (
                    <Link to={props.data.previous.slug}>
                      {props.data.previous.title}
                    </Link>
                  )}
                </Box>
                <Box>
                  {props.data && props.data.next && (
                    <Link to={props.data.next.slug}>
                      {props.data.next.title}
                    </Link>
                  )}
                </Box>
              </Flex>
            </>
          )}
        </Container>
      </Main>

      <Footer>
        <Container>
          <Styled.hr />
          <Styled.p>Footer...</Styled.p>
        </Container>
      </Footer>
    </Layout>
  )
}

OwnLayout.propTypes = {
  children: PropTypes.any,
  data: PropTypes.object,
}

export default OwnLayout
