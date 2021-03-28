module.exports = { 
  siteMetadata: {
    title: `Luis Manzanero`,
    description: `Hello, I am Luis Manzanero - An aspiring enviornmental scientist, full stack web developer, and innovator`,
    author: `@gatsbyjs`,
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
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL:  "https://lmanzanero.herokuapp.com" || process.env.REACT_API_URL,
        contentTypes: [
          `article`,
          `category`, 
        ], 
        singleTypes: [
          `homepage`, 
        ],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luis Manzanero`,
        short_name: `lmanzanero.com`,
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
