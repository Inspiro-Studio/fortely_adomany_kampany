import React from "react"
import { BlogNav } from "../Nav"
import { Footer } from "../Footer"
import "../../styles/index.scss"

const BlogLayout = ({ children }) => (
  <div style={{ backgroundColor: "#fbfbfb" }}>
    <BlogNav />
    {children}
    <Footer type="external" />
  </div>
)

export default BlogLayout
