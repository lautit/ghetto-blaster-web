require(`dotenv`).config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    siteTitle: `Ghetto Blaster`,
    siteTitleAlt: `Producciones`,
    siteHeadline: `Ghetto Blaster Producciones`,
    siteUrl: `https://www.ghettoblaster.com.ar`,
    siteDescription: ``,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@lautit`,
    basePath: `/`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `ghettoblasterfamilia`,
        access_token: `788804718226912`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ghetto Blaster Producciones`,
        short_name: `Ghetto Blaster`,
        description: ``,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-theme-ui`
  ]
};
