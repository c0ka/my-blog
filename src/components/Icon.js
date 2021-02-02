import React from "react"
import PropTypes from "prop-types"
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5"
import { Icon as ChakraIcon } from "@chakra-ui/react"

const Icon = ({ name, ...props }) => {
  return (
    <>
      {name === "darkTheme" && <ChakraIcon as={IoMoonSharp} {...props} />}
      {name === "lightTheme" && <ChakraIcon as={IoSunnySharp} {...props} />}
    </>
  )
}

export default Icon
