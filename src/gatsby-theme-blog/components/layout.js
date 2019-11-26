// npm
import React from "react"
import { css, Styled } from "theme-ui"
import Helmet from "react-helmet"

// self
import Header from "./header"

export default ({ children, ...props }) => (
  <Styled.root>
    <Helmet htmlAttributes={{ style: { overflowY: "scroll" } }} />
    <Header {...props} />
    <div>
      <div
        css={css({
          px: 3,
          py: 4,
        })}
      >
        {children}
      </div>
    </div>
  </Styled.root>
)
