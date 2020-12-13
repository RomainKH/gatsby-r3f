import React, {Suspense} from "react"

import { Html } from '@react-three/drei'
import {Layout, SEO, ThreeScene, ErrorBoundary} from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" lang="en" />
    <ErrorBoundary fallback={null}>
      <Suspense fallback={<Html>Loading..</Html>}>
        <ThreeScene />
      </Suspense>
    </ErrorBoundary>
  </Layout>
)

export default IndexPage
