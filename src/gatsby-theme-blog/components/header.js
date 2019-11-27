/** @jsx jsx */

// npm
// import React from "react"
import {
  jsx,
  css,
  // useColorMode,
  Styled,
  Header,
  Container,
  Flex,
  useThemeUI,
} from "theme-ui"
// import Switch from "gatsby-theme-blog/src/components/switch"
import sun from "gatsby-theme-blog/assets/sun.png"
import moon from "gatsby-theme-blog/assets/moon.png"
import PropTypes from "prop-types"
import { withPrefix } from "gatsby"

// self
import Bio from "../components/bio"
import Link from "../../components/link"

// const rootPath = `${__PATH_PREFIX__}/`
const rootPath = withPrefix()

const Title = ({ children, location }) => {
  if (location && location.pathname === rootPath) {
    return (
      <Styled.h1
        css={css({
          my: 0,
          fontSize: 4,
        })}
      >
        <Link
          css={css({
            color: `inherit`,
            boxShadow: `none`,
            textDecoration: `none`,
          })}
          to="/"
        >
          {children}
        </Link>
      </Styled.h1>
    )
  } else {
    return (
      <Styled.h3
        as="p"
        css={css({
          my: 0,
        })}
      >
        <Link
          css={css({
            boxShadow: `none`,
            textDecoration: `none`,
            color: `primary`,
          })}
          to="/"
        >
          {children}
        </Link>
      </Styled.h3>
    )
  }
}

Title.propTypes = {
  location: PropTypes.object,
  children: PropTypes.any,
}

const checkedIcon = (
  <img
    alt="moon indicating dark mode"
    src={moon}
    width="16"
    height="16"
    role="presentation"
    css={{
      pointerEvents: `none`,
      margin: 4,
    }}
  />
)

const uncheckedIcon = (
  <img
    alt="sun indicating light mode"
    src={sun}
    width="16"
    height="16"
    role="presentation"
    css={{
      pointerEvents: `none`,
      margin: 4,
    }}
  />
)

const BlogHeader = ({ children, title, ...props }) => {
  const { theme, colorMode, setColorMode } = useThemeUI()
  const modes = Object.keys(theme.colors.modes).sort()
  modes.push("light")

  let modeIndex = modes.indexOf(colorMode)
  if (modeIndex === -1) modeIndex = 0

  const toggleColorMode = (e) => {
    const shifted = e.shiftKey ? -1 : 1
    let newMode = modeIndex + shifted
    if (newMode < 0) newMode = modes.length - 1
    if (newMode > modes.length - 1) newMode = 0
    setColorMode(modes[newMode])
  }

  return (
    <Header
      sx={{
        px: 3,
        pt: 4,
      }}
    >
      <Container>
        <Flex
          sx={{
            flexWrap: "wrap",
            justifyContent: `space-between`,
            alignItems: "center",
          }}
        >
          <Title {...props}>{title}</Title>
          <div aria-label="Toggle dark mode" onClick={toggleColorMode}>
            Switch
          </div>
        </Flex>
        {props.location && props.location.pathname === rootPath && (
          <Bio sx={{ width: "100%" }} />
        )}
      </Container>
    </Header>
  )
}

BlogHeader.propTypes = {
  location: PropTypes.object,
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
}

export default BlogHeader

/*

            checkedIcon={checkedIcon}
            uncheckedIcon={uncheckedIcon}
            checked={isDark}
            onChange={toggleColorMode}



*/
