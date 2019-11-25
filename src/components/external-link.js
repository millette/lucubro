// npm
import React from "react"
import { Styled } from "theme-ui"

const Link = ({ to, ...props }) => (
  <Styled.a {...props} target="_blank" rel="noopener noreferrer" href={to} />
)

export default Link
