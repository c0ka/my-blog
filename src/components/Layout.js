// Persisting layout between page changes
// for e.g. animating navigation
// Storing state when navigating pages
// Custom error handling using componentDidCatch
// Inject additional data into pages using React Context.

import React, { useState, useEffect } from "react"
import { chakra, Container, Flex, useColorMode } from "@chakra-ui/react"

// import BannerNotification from "./BannerNotification"
// import Footer from "./Footer"
// import Link from "./Link"
import Nav from "./Nav"
// import SideNav from "./SideNav"
// import SideNavMobile from "./SideNavMobile"

const Layout = (props) => {
  const path = props.path
  const shouldShowSideNav = path.includes("/docs/")
  const shouldShowBanner =
    path.includes("/eth2/") && !path.includes("/eth2/deposit-contract/")

  return (
    <Flex
      position="relative"
      direction="column"
      maxW={{ lg: "1504px" }}
      minH="100vh"
      mx="auto"
      my="0"
    >
      <Nav />
      {props.children}
    </Flex>
  )
}

export default Layout
