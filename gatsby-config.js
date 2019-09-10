module.exports = {
  siteMetadata: {
    title: `Web Developer`,
    description: 'rm -rf bad_things.* && touch good_things.js',
    author: `Chance Embrey-Farquhar`,
    image: 'src/images/gatsby-icon.png',
    url: 'https://chancehalo.me',
    twitterUsername: '@ChanceHalo'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sass",
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
        name: `Chance Halo Embrey-Farquhar`,
        short_name: `Chance`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
