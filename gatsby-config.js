module.exports = {
  siteMetadata: {
	  title: `目覚めは夕暮れ`,
    description: `my dev blog`,
    author: `kami-yuuuuu`,
    siteUrl: `https://mezamehayu-gure.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
	  {
		  resolve:`gatsby-source-filesystem`,
		  options: {
			  name: `blog`,
			  path: `${__dirname}/src/blog`
		  },
	  },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mezamehayu-gure`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/kuranntetyann Small.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-mdx`,
  ],
}
