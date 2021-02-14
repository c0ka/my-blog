import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { forwardRef, Link as ChakraLink } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"

const HASH_PATTERN = /^#.*/
// const DOMAIN_PATTERN = /^(?:https?:)?[/]{2,}([^/]+)/
// const INTERNAL_PATTERN = /^\/(?!\/)/
// const FILE_PATTERN = /.*[/](.+\.[^/]+?)([/].*?)?([#?].*)?$/

const isHashLink = (to) => HASH_PATTERN.test(to)

const Link = forwardRef((props, ref) => {
  // markdown pages pass `href`, not `to`
  const {
    to,
    href,
    hideArrow = false,
    isPartiallyActive = true,
    children,
    ...rest
  } = props
  const dest = to || href

  const isExternal = dest.includes("http") || dest.includes("mailto:")
  const isHash = isHashLink(dest)
  const isStatic = dest.includes("static")

  // Must use <a> tags for anchor links
  // Otherwise <Link> functionality will navigate to homepage
  // See https://github.com/gatsbyjs/gatsby/issues/21909
  if (isHash) {
    return (
      <ChakraLink href={dest} ref={ref} {...rest}>
        {children}
      </ChakraLink>
    )
  }

  // Links to static image assets must use <a> to avoid
  // <Link> redirection. Opens in separate window.
  if (isStatic) {
    return (
      <ChakraLink href={dest} ref={ref} {...rest} isExternal>
        {children}
      </ChakraLink>
    )
  }

  // chakra sets "noopener noreferrer" and "_blank" as default for external link
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types
  if (isExternal) {
    // const Arrow = !hideArrow ? <ExternalLinkIcon mx="2px" /> : undefined
    return (
      <ChakraLink href={dest} ref={ref} {...rest} isExternal>
        {children}
        !hideArrow ? <ExternalLinkIcon mx="2px" /> : null
      </ChakraLink>
    )
  }

  // use GatsbyLink for internal link.
  return (
    <ChakraLink
      as={GatsbyLink}
      to={dest}
      ref={ref}
      {...rest}
      partiallyActive={isPartiallyActive}
    >
      {children}
    </ChakraLink>
  )
})

export default Link
