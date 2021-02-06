import React from "react"
import { Box, Text, Flex } from "@chakra-ui/react"
import { chakra, forwardRef } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import PhotoCard from "../components/PhotoCard"
import Link from "../components/Link"
import { Link as ChakraLink } from "@chakra-ui/react"

// with chakra factory method
const Menu = chakra(Box, {
  baseStyle: {
    bg: "gray.300",
    color: "red.500",
  },
})

// with forwardRef
const Card = forwardRef((props, ref) => (
  <Flex
    align="center"
    justify="center"
    px="4"
    py="5"
    rounded="sm"
    shadow="lg"
    ref={ref}
    {...props}
  />
))

function IndexPage() {
  return (
    <>
      <Menu w={[300, 600, 1024]} p={4}>
        <Text fontSize="xl">Hello World</Text>
      </Menu>
      <Card fontSize="xl" h="500">
        <AddIcon />
        With forwardRef 方法
        <Link to="https://www.google.com">
          Try an external link to google.com!
        </Link>
        <ChakraLink href="https://www.baidu.com">
          Try an external link with Chakra default link!
        </ChakraLink>
      </Card>
      <Box w={800} layerStyle="selected">
        With layerStyle
      </Box>
      <PhotoCard />
    </>
  )
}

export default IndexPage
