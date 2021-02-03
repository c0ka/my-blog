import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import React from "react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import Link from "./Link"

const NavMenu = ({ menu }) => {
  const result = menu.map((section, idx) => {
    if (section.items) {
      return (
        <Menu>
          <MenuButton
            as={Button}
            variant="ghost"
            rightIcon={<ChevronDownIcon key={idx} />}
          >
            {section.text}
          </MenuButton>
          <MenuList>
            {section.items.map((item, idx) => {
              return (
                <MenuItem as={Link} key={idx} to={item.to}>
                  {item.text}
                </MenuItem>
              )
            })}
          </MenuList>
        </Menu>
      )
    }
    return (
      <Button variant="ghost" key={idx}>
        {section.text}
      </Button>
    )
  })
  return result
}

export default NavMenu
