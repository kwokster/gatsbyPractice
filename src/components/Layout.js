import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './layout.css'
import '../sass/layout.scss'

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
