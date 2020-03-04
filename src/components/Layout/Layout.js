import React from "react"
import { Nav } from "../Nav"
import { Footer } from "../Footer"
import "../../styles/index.scss"

const Layout = ({ children }) => (
  <main>
    <Nav />
    {children}
    <Footer />
  </main>
)

export default Layout
