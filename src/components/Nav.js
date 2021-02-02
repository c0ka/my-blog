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
import Search from "./Search"
import Icon from "./Icon"

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
        <HStack spacing="4">
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
      <Search />
      <Box>
        <Box as="button" colorScheme="blue" onClick={toggleColorMode}>
          <Icon
            name={colorMode === "light" ? "lightTheme" : "darkTheme"}
            w={6}
            h={6}
            mx={4}
            color="blue.500"
            _hover={{ color: "blue.700" }}
          />
        </Box>
        <Button colorScheme="blue">Log in</Button>
      </Box>
    </NavContainer>
  )
}

export default Nav
