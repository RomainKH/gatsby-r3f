import React from "react"

import {Layout, SEO, ErrorBoundary} from "../components"
import loadable from '@loadable/component'

const ThreeScene = loadable(() => import('../components'))

const IndexPage = () => (
  <Layout>
    <SEO title="Home" lang="en" />
    <ErrorBoundary fallback={null}>
      <ThreeScene />
    </ErrorBoundary>
  </Layout>
)

export default IndexPage
