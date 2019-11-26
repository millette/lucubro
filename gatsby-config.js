"use strict"

const { name, description, author } = require("./package.json")

module.exports = {
  pathPrefix: `/${name}`,
  siteMetadata: {
    title: "I still have a project",
    author: author.name,
    description,
    siteUrl: `https://millette.github.io/${name}`,
    social: [
      {
        name: "Homepage",
        url: "http://robin.millette.info/",
      },
      {
        name: "millette@mastodon",
        url: "https://mastodon.fedi.quebec/@millette",
      },
    ],
  },
  plugins: [
    "gatsby-theme-style-guide",
    {
      resolve: "gatsby-theme-notes",
      options: {
        mdx: false,
        basePath: "/notes",
      },
    },
    "gatsby-theme-blog",
  ],
}
