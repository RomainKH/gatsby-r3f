/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import { loadableReady } from '@loadable/component'
import { hydrate } from 'react-dom'

export const replaceHydrateFunction = () => (element, container, callback) => {
  loadableReady(() => {
    hydrate(element, container, callback)
  })
}