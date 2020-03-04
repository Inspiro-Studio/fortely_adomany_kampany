import React from "react"
import { ScrollTo } from "./"
import { Link as GatsbyLink } from "gatsby"

export const Link = ({ to, title, type = "internal", ...props }) => {
  return type === "internal" ? (
    <ScrollTo to={to} title={title} {...props}>
      {title}
    </ScrollTo>
  ) : (
    <GatsbyLink to={`/#${to}`} {...props}>
      {title}
    </GatsbyLink>
  )
}
