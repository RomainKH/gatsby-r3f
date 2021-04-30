import React from "react"

import {Layout, SEO} from "../components"
import loadable from '@loadable/component'

const ThreeScene = loadable(() => import('../components'))

const IndexPage = () => {
  const isSSR = typeof window === "undefined"
  return (  
    <Layout>
      <SEO title="Home" lang="en" />
      {!isSSR && 
        <ThreeScene />
      }
    </Layout>
  )
}

export default IndexPage
