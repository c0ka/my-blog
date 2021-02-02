import React from "react"
import {
  chakra,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"
import { Flex, Square, Heading, Spacer, Button } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Link from "./Link"
import Search from "./Search"
import Icon from "./Icon"

const NavContainer = chakra(Flex, {
  baseStyle: {
    position: "sticky",
    top: "0",
    alignItems: "center",
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
          <Heading size="md" color="purple.700">
            Chakra App
          </Heading>
        </HStack>
      </Link>
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
