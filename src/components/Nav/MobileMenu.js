import React from "react"
import {
  useDisclosure,
  IconButton,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Text,
  List,
  ListItem,
  Heading,
} from "@chakra-ui/react"

import Search from "./Search"
import Link from "../Link"
import { HamburgerIcon } from "@chakra-ui/icons"

function MobileMenu({ menuSections }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <IconButton
        icon={<HamburgerIcon />}
        variant="outline"
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader color="purple.700">Chakra App</DrawerHeader>

            <DrawerBody>
              <Search />
              <List>
                {menuSections.map((section, idx) => {
                  if (section.items) {
                    return (
                      <ListItem key={idx} aria-label={section.text} my={4}>
                        <Heading size="md">{section.text}</Heading>
                        <List>
                          {section.items.map((item, idx) => {
                            return (
                              <ListItem as={Link} key={idx} to={item.to} my={2}>
                                {item.text}
                              </ListItem>
                            )
                          })}
                        </List>
                      </ListItem>
                    )
                  }
                  return (
                    <ListItem
                      as={Link}
                      key={idx}
                      to={section.to}
                      aria-label={section.text}
                      my={4}
                    >
                      <Heading size="md">{section.text}</Heading>
                    </ListItem>
                  )
                })}
              </List>
            </DrawerBody>

            <DrawerFooter>
              <Button colorScheme="purple">Log in</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default MobileMenu
