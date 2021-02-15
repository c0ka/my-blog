import React from "react"
import { mode } from "@chakra-ui/theme-tools"
import { Box, Flex, Spacer, Button } from "@chakra-ui/react"
import { chakra, HStack, IconButton, useColorMode } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Link from "../Link"
import Search from "./Search"
import Icon from "../Icon"
import NavMenu from "./Menu"
import MobileDrawer from "./MobileDrawer"

const NavContainer = chakra(Flex, {
  baseStyle: {
    position: "sticky",
    top: "0",
    alignItems: "center",
    width: "100%",
    height: "6em",
    zIndex: "35",
    padding: "1em 2em",
    display: "flex",
    boxSizing: "border-box",
    borderBottom: "1px",
  },
})

const GatsbyImage = chakra(Img, {
  // baseStyle: {
  //   opacity: "0.85",
  //   _hover: { opacity: "1" },
  // },
})

const Nav = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/icon-zyp.png" }) {
        childImageSharp {
          fixed(height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          menuSections {
            text
            ariaLabel
            to
            items {
              text
              to
            }
          }
        }
      }
    }
  `)

  return (
    <NavContainer
      borderColor={colorMode !== "dark" ? "gray.100" : "gray.700"}
      bg={colorMode !== "dark" ? "white" : "gray.800"}
    >
      {/* logo */}
      <Link to="/">
        <HStack spacing="4">
          <GatsbyImage
            fixed={data.file.childImageSharp.fixed}
            alt="home logo"
          />
          {/* <Heading size="md" color="purple.700">
            Chakra App
          </Heading> */}
        </HStack>
      </Link>
      <Box display={{ base: "none", lg: "flex" }} justify="space-between">
        <NavMenu menuSections={data.site.siteMetadata.menuSections} />
        <MobileDrawer menuSections={data.site.siteMetadata.menuSections} />
      </Box>
      <Spacer />
      <Search />
      <IconButton
        as="button"
        aria-label="Color Scheme"
        variant="ghost"
        colorScheme="purple"
        mx="2"
        icon={<Icon name={colorMode} boxSize={6} />}
        onClick={toggleColorMode}
      />
      <Button colorScheme="purple">Log in</Button>
    </NavContainer>
  )
}

export default Nav
