import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default () => (
  <Layout>
    Hello World <Link to="/blog/">Blog</Link>
    <h1
      style={{ fontSize: "2rem", textTransform: "capitalize", color: "blue" }}
    >
      Hello
    </h1>
    <div className="container">
      <div className="row">
        <div className="col-4">Hello</div>
        <div className="col-4">Hello</div>
        <div className="col-4">Hello</div>
      </div>
    </div>
  </Layout>
)
