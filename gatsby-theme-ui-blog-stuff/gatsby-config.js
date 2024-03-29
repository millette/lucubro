"use strict"

const { name, description, author } = require("./package.json")

module.exports = {
  pathPrefix: `/${name}`,
  siteMetadata: {
    title: "I still have a project",
    author: author.name,
    description,
    siteUrl: `https://millette.github.io/${name}`,
    social: {
      // twitter: `RoLLodeQc`,
      name: `millette@mastodon`,
      url: `https://mastodon.fedi.quebec/@millette`,
    },
  },
  plugins: ["gatsby-theme-ui-blog", "gatsby-theme-style-guide"],
}
