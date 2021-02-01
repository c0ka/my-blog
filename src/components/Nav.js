import React from "react"
import {
  chakra,
  HStack,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"
import { Flex, Box, Heading, Spacer, Button } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Link from "./Link"

const NavContainer = chakra(Flex, {
  baseStyle: {
    position: "sticky",
    top: "0",
    width: "100%",
    height: "4.75em",
    zIndex: "1000",
    padding: "1em 2em",
    display: "flex",
    boxSizing: "border-box",
    borderBottom: "1px",
  },
})

const GatsbyImage = chakra(Img)

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bdColor = useColorModeValue("gray.100", "gray.700")

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/icon.png" }) {
        childImageSharp {
          fixed(width: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <NavContainer borderColor={bdColor}>
      <Link to="/">
        <HStack spacing="2">
          <GatsbyImage
            opacity="0.85"
            _hover={{ opacity: "1" }}
            fixed={data.file.childImageSharp.fixed}
            alt="home logo"
          />
          <Heading size="md">Chakra App</Heading>
        </HStack>
      </Link>
      <Spacer />
      <Box>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
        <Button colorScheme="teal" mr="4">
          Sign Up
        </Button>
        <Button colorScheme="teal">Log in</Button>
      </Box>
    </NavContainer>
  )
}

export default Nav
