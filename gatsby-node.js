/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const LoadablePlugin = require('@loadable/webpack-plugin')

exports.onCreateWebpackConfig = ({ actions, stage }) => {
    if (
        stage === "build-javascript" ||
        stage === "develop" ||
        stage === "develop-html"
    ) {
        actions.setWebpackConfig({
        plugins: [
            new LoadablePlugin({
            filename:
                stage === "develop"
                ? `public/loadable-stats.json`
                : "loadable-stats.json",
            writeToDisk: true
            })
        ]
        });
    }
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({ name: '@loadable/babel-plugin' })
}