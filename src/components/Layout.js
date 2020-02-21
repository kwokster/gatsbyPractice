import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    //Fragment shorthand
    <main>
      <Nav />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
