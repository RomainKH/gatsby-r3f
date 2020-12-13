module.exports = {
  siteMetadata: {
    title: `Gatsby R3F Boilerplate`,
    description: `A small gatsby and r3f boilerplate for an easy start in the world of 3d web programming.`,
    author: `@rxkh_`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-r3f-boilerplate-rkh`,
        short_name: `gr3f`,
        start_url: `/`,
        background_color: `#292233`,
        theme_color: `#292233`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
