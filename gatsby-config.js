require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Ghetto Blaster Producciones`,
    siteTitleAlt: `Ghetto Blaster Familia`,
    siteHeadline: `Ghetto Blaster Producciones`,
    siteUrl: `https://www.ghettoblaster.com.ar`,
    siteDescription: ``,
    siteLanguage: `es`,
    siteImage: `/banner.jpg`,
    author: `@lautit`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://7be4537138e34c209d5757f2b9f4da8b@sentry.io/1772908',
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    //{
    //  resolve: `gatsby-source-instagram-all`,
    //  options: {
    //    access_token: `8395668656.1677ed0.4980badfebc244e198abd05d670a0f40`, //`EAALNaekG7eABADryyexZBiPENELc0zQznWvWb4to1S5E7IRmvqEZCY3QGznZC1GphnQ9zsBAVKHaBq6Rt6NZBJneZBkTcY0g1mPM4W27hXAgtHHHgAaauUwkOOwdYWjjuvaH4rqrTJ9KrTbwRUc3qlgOckfPzuSZC2vEFlxozINAZDZD`
    //  },
    //},
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
