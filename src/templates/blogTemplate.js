import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import { Box, Grid, Text, Heading, Divider } from "@chakra-ui/react"

import CodeBlock from "../components/CodeBlock"
import Link from "../components/Link"

const mdxComponents = {
  a: Link,
  code: CodeBlock,
  divider: Divider,
  h1: (props) => <Heading as="h1" mb={10} size="4xl" {...props} />,
  h2: (props) => <Heading as="h2" size="lg" {...props} />,
  p: (props) => <Text fontSize="md" my={4} {...props} />,
}

export default function BlogPage({ data, pageContext }) {
  const mdx = data.pageData
  const tocItems = mdx.tableOfContents.items

  return (
    <Grid
      mx="auto"
      px="2rem"
      py={["3rem", null, null, "4.5rem"]}
      templateColumns={["1fr", null, null, "1fr 15rem"]}
      columnGap="4.5rem"
      maxW={[null, "42rem", null, "68rem"]}
      width={["90%", null, "100%"]}
    >
      <Heading size="2xl" mb={4}>
        {mdx.frontmatter.title}
      </Heading>
      <Box>placeholder for author</Box>
      <Box pt="2rem">
        <MDXProvider components={mdxComponents}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Box>
      <Box>placeholder for Tags</Box>
      <Box bg="purple.200">placeholder for sibling Links</Box>
    </Grid>
  )
}

export const query = graphql`
  query BlogPageQuery($id: String) {
    siteData: site {
      siteMetadata {
        siteUrl
      }
    }
    pageData: mdx(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        sidebar
      }
      body
      tableOfContents
    }
  }
`
