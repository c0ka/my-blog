const menuSections = require("./menu-sections.js")

require("dotenv").config()

const siteUrl = `https://mysite.com`

module.exports = {
  // 设置 Gatsby 行为
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    FAST_DEV: true,
    FAST_REFRESH: true,
  },

  // 站点信息
  siteMetadata: {
    title: `My Blog`,
    description: `个人空间`,
    url: process.env.SITE_URL,
    siteUrl,
    author: `c0ka`,
    menu: menuSections,
  },

  // 插件区域
  plugins: [
    // Source assets
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    // md & mdx files
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    // Source data
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    // Image support in markdown
    `gatsby-remark-images`,
    // Needed for `gatsby-image`
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // MDX and MD support
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // process all `.md` files as MDX
        extensions: [`.mdx`, `.md`],
        // Workaround to fix `backgroundColor` bug:
        // https://github.com/gatsbyjs/gatsby/issues/25272
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: `transparent`,
              maxWidth: 1200,
            },
          },
        ],
        // Note: in order for MDX to work with gatsby-remark-plugins
        // The plugin must be listed top-level & in gatsbyRemarkPlugins
        // See: https://www.gatsbyjs.org/docs/mdx/plugins/
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: `transparent`,
              maxWidth: 1200,
            },
          },
        ],
        remarkPlugins: [],
      },
    },
    // CSS in js
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        isResettingCSS: true,
      },
    },
    // SEO tags
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl,
      },
    },
    // Create a sitemap when run in production mode.
    // TOTO: writing options
    `gatsby-plugin-sitemap`,
    // Adds the Lodash webpack & Babel plugins for easy modular, small Lodash builds.
    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disabledFeatures: [
          `shorthands`,
          `currying`,
          `caching`,
          `collections`,
          `exotics`,
          `guards`,
          `metadata`,
          `deburring`,
          `unicode`,
          `chaining`,
          `momoizing`,
          `coercions`,
          `flattening`,
          `paths`,
          `placeholders`,
        ],
      },
    },
  ],
}
