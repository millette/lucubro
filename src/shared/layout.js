// npm
import React from "react"
import { Link } from "gatsby"
import { useColorMode } from "theme-ui"
import PropTypes from "prop-types"

// self
import Head from "./head"

const Layout = (props) => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <>
      <Head {...props} />
      <h1>
        <Link to="/">My own ham</Link>
      </h1>

      <button
        onClick={() => {
          setColorMode(colorMode === "default" ? "dark" : "default")
        }}
      >
        Toggle {colorMode === "default" ? "Dark" : "Light"}
      </button>

      {props.children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
