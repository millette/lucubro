/** @jsx jsx */

// npm
import { jsx, Styled } from "theme-ui"

// self
import Layout from "../shared/layout"

export default ({
  title,
  date,
  excerpt,
  children,
  keywords,
  tags,
  ...props
}) => (
  <Layout title={title} excerpt={excerpt} {...props}>
    <Styled.h1>{title}</Styled.h1>
    <div>{date}</div>
    {children}
  </Layout>
)
