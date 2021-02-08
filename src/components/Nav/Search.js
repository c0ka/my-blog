import React from "react"
import { SearchIcon } from "@chakra-ui/icons"
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react"

const Search = () => {
  return (
    <InputGroup w="56">
      <Input placeholder="Search" />
      <InputRightElement children={<SearchIcon />} />
    </InputGroup>
  )
}

export default Search
