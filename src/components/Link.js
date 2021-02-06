import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link as ChakraLink } from "@chakra-ui/react"
import { InfoOutlineIcon, ExternalLinkIcon } from "@chakra-ui/icons"

const HASH_PATTERN = /^#.*/
// const DOMAIN_PATTERN = /^(?:https?:)?[/]{2,}([^/]+)/
// const INTERNAL_PATTERN = /^\/(?!\/)/
// const FILE_PATTERN = /.*[/](.+\.[^/]+?)([/].*?)?([#?].*)?$/

const isHashLink = (to) => HASH_PATTERN.test(to)

const Link = ({
  to,
  href,
  children,
  hideArrow = false,
  className,
  isPartiallyActive = true,
}) => {
  // markdown pages pass `href`, not `to`
  to = to || href

  const isExternal = to.includes("http") || to.includes("mailto:")
  const isHash = isHashLink(to)
  const isGlossary = to.includes("glossary")
  const isStatic = to.includes("static")

  // Must use <a> tags for anchor links
  // Otherwise <Link> functionality will navigate to homepage
  // See https://github.com/gatsbyjs/gatsby/issues/21909
  if (isHash) {
    return (
      <ChakraLink className={className} href={to}>
        {children}
      </ChakraLink>
    )
  }

  // Links to static image assets must use <a> to avoid
  // <Link> redirection. Opens in separate window.
  if (isStatic) {
    return (
      <ChakraLink
        className={className}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </ChakraLink>
    )
  }

  // use "noopener" and "noreferrer" rel to prevent dangerous operations.
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types
  if (isExternal) {
    return hideArrow ? (
      <ChakraLink
        className={className}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </ChakraLink>
    ) : (
      <ChakraLink
        className={className}
        href={to}
        target="_blank"
        isExternal
        rel="noopener noreferrer"
      >
        {children}
        <ExternalLinkIcon mx="2px" />
      </ChakraLink>
    )
  }

  return (
    <ChakraLink
      as={GatsbyLink}
      className={className}
      to={to}
      // activeClassName="active"
      partiallyActive={isPartiallyActive}
    >
      {children}
      {isGlossary && <InfoOutlineIcon w={6} h={6} />}
    </ChakraLink>
  )
}

export default Link
