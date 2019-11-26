/** @jsx jsx */

// npm
// import React from "react"
import {
  jsx,
  css,
  useColorMode,
  Styled,
  Header,
  Container,
  Flex,
} from "theme-ui"
import Switch from "gatsby-theme-blog/src/components/switch"
import sun from "gatsby-theme-blog/assets/sun.png"
import moon from "gatsby-theme-blog/assets/moon.png"

// self
import Bio from "../components/bio"
import Link from "../../components/link"

const rootPath = `${__PATH_PREFIX__}/`

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
          css={{
            color: `inherit`,
            boxShadow: `none`,
            textDecoration: `none`,
          }}
          to={`/`}
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
          to={`/`}
        >
          {children}
        </Link>
      </Styled.h3>
    )
  }
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

export default ({ children, title, ...props }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e) => {
    setColorMode(isDark ? `light` : `dark`)
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
          <Switch
            aria-label="Toggle dark mode"
            checkedIcon={checkedIcon}
            uncheckedIcon={uncheckedIcon}
            checked={isDark}
            onChange={toggleColorMode}
          />
        </Flex>
        {props.location && props.location.pathname === rootPath && (
          <Bio sx={{ width: "100%" }} />
        )}
      </Container>
    </Header>
  )
}
