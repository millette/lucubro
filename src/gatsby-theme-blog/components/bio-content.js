// npm
import React from "react"
import { Styled } from "theme-ui"

// self
import Link from "../../components/external-link"

export default ({ author, siteUrl }) => (
  <Styled.p>
    Words by <Link to={siteUrl}>{author}</Link>.
    <br />
    Change me. This is all quite default.
  </Styled.p>
)
