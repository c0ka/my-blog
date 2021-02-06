import React from "react"
import PropTypes from "prop-types"
import { Icon as ChakraIcon } from "@chakra-ui/react"
import { MdWbSunny, MdBrightness2 } from "react-icons/md"

const iconStore = {
  dark: MdBrightness2,
  light: MdWbSunny,
}

const Icon = ({ name, ...props }) => {
  if (name && iconStore[name])
    return <ChakraIcon as={iconStore[name]} {...props} />
}

Icon.prototype = {
  name: PropTypes.string,
}

export default Icon
