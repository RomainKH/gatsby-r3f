import React from "react"
import { Link } from "gatsby"

import {Layout, SEO, ThreeScene} from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ThreeScene />
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
