module.exports = { 
  siteMetadata: {
    siteUrl: `https://lmanzanero.com/`,
    title: `Luis Manzanero`,
    description: `Hello, I am Luis Manzanero - An aspiring environmental scientist, full stack web developer, and innovator`,
    author: `@gatsbyjs`,
  },
  plugins: [
    'gatsby-plugin-cname',
    {
      resolve: `gatsby-plugin-sitemap`,
      options: { 
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [`/category/*`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              nodes {
                path
              }
            }
        }`,
        resolveSiteUrl: ({site}) => {
          //Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return site.siteMetadata.siteUrl
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            if(node.path.startsWith('/blog/')){
              return {
                url: `${site.siteMetadata.siteUrl}${node.path}`,
                changefreq: `never`,
                priority: 0.5,
              }
            } else {
              return {
                url: `${site.siteMetadata.siteUrl}${node.path}`,
                changefreq: `weekly`,
                priority: 0.7,
              }
            }
          })
      }
    },
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
