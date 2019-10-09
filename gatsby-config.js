require(`dotenv`).config({
  path: `.env`,
})

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
    basePath: `/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: `8395668656.1677ed0.4980badfebc244e198abd05d670a0f40`, //`EAALNaekG7eABADryyexZBiPENELc0zQznWvWb4to1S5E7IRmvqEZCY3QGznZC1GphnQ9zsBAVKHaBq6Rt6NZBJneZBkTcY0g1mPM4W27hXAgtHHHgAaauUwkOOwdYWjjuvaH4rqrTJ9KrTbwRUc3qlgOckfPzuSZC2vEFlxozINAZDZD`
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
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
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-theme-ui`,
  ],
}
