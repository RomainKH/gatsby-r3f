import React from "react"
import { Layout, SEO, ThreeScene } from "../components"
import { A11yAnnouncer } from '@react-three/a11y'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" lang="en" />
    <ThreeScene />
    <A11yAnnouncer />
  </Layout>
)

export default IndexPage
