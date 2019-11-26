// npm
import React from "react"
import DirectoryList from "gatsby-theme-notes/src/components/directory-list"
import FileList from "gatsby-theme-notes/src/components/file-list"
import Breadcrumbs from "gatsby-theme-notes/src/components/breadcrumbs"
import Layout from "gatsby-theme-notes/src/components/layout"

// self
import Link from "../../components/link"

export default ({
  directories,
  files,
  breadcrumbs = [],
  siteTitle,
  ...props
}) => (
  <Layout {...props} title={siteTitle}>
    <div>
      Go <Link to="/">HOME</Link>
    </div>
    {breadcrumbs.length ? <Breadcrumbs links={breadcrumbs} /> : null}
    <DirectoryList directories={directories} />
    <FileList files={files} />
  </Layout>
)
