const fs = require("fs")
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const gatsbyConfig = require(`./gatsby-config.js`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const slugValue = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `${slugValue}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Restructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges

  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/blogTemplate.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id, dev: true },
    })
  })
}
