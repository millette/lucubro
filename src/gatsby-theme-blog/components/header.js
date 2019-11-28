// npm
import React from "react"
import { css, Styled, Header, Container, Flex, useThemeUI } from "theme-ui"
import PropTypes from "prop-types"
import { withPrefix } from "gatsby"

// self
import Bio from "../components/bio"
import Link from "../../components/link"

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

const Switch = ({ modes, colorMode, setColorMode }) => {
  const modeKeys = Object.keys(modes)
    .filter((n) => n !== "ORIGINAL")
    .sort()
  modeKeys.push("light")
  const modeIndex = Math.max(0, modeKeys.indexOf(colorMode)) + modeKeys.length
  const pal = [
    (modeIndex - 2) % modeKeys.length,
    (modeIndex - 1) % modeKeys.length,
    modeIndex % modeKeys.length,
    (modeIndex + 1) % modeKeys.length,
    (modeIndex + 2) % modeKeys.length,
  ].map((n) => ({
    n,
    name: modeKeys[n],
    fg: modes[modeKeys[n]] ? modes[modeKeys[n]].text : modes.ORIGINAL.text,
    bg: modes[modeKeys[n]]
      ? modes[modeKeys[n]].background
      : modes.ORIGINAL.background,
  }))

  const click = (g) => () => setColorMode(g)

  return (
    <code css={css({ bg: "text", px: "0.25rem" })}>
      {pal.map(({ n, name, fg, bg }, i) => (
        <span
          title={i === 2 ? `Current colors: ${name}` : `Pick ${name} colors`}
          onClick={click(name)}
          key={n}
          style={{
            cursor: i === 2 ? "auto" : "pointer",

            fontWeight: i === 2 ? "bold" : "normal",
            padding: "0.6rem 0.25rem",
            margin: "0.25rem",
            color: fg,
            backgroundColor: bg,
          }}
        >
          &nbsp;{name.replace("custom-", "#")}&nbsp;
        </span>
      ))}
    </code>
  )
}

Switch.propTypes = {
  modes: PropTypes.object.isRequired,
  colorMode: PropTypes.string.isRequired,
  setColorMode: PropTypes.func.isRequired,
}

const BlogHeader = ({ children, title, ...props }) => {
  const { theme, colorMode, setColorMode } = useThemeUI()

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
          <Switch
            modes={theme.colors.modes}
            colorMode={colorMode}
            setColorMode={setColorMode}
          />
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
