import React, {Suspense} from "react"
import { Link } from "gatsby"

import { Html } from '@react-three/drei'
import {Layout, SEO, ThreeScene, ErrorBoundary} from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ErrorBoundary fallback={null}>
      <Suspense fallback={<Html>loading..</Html>}>
        <ThreeScene />
      </Suspense>
    </ErrorBoundary>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
