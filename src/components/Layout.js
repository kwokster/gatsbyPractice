import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    //Fragment shorthand
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default Layout
