require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-emilia-core/gatsby-config.js
    siteTitle: `Andrew J. Young`,
    siteTitleAlt: `Andrew J. Young`,
    siteHeadline: `Andrew J. Young`,
    siteUrl: `https://andrewjunyoung.com`,
    siteDescription: `Minimalistic portfolio site with masonry grid, page transitions and big images. Themeable with Theme UI. Includes Light/Dark mode.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@andrewjunyoung`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {
        name: `Andrew J. Young`,
        location: `Toronto, ON 🇨🇦  | New York, NY 🇺🇸 `,
        formatString: `YYYY.MM.DD`,
        showThemeAuthor: false,
        socialMedia: [
          {
            title: `Schedule a meeting`,
            href: `https://calendly.com/andrewjunyoung/30`
          },
          {
            title: `Twitter`,
            href: `https://twitter.com/andrewjunyoung`
          },
          {
            title: `Instagram`,
            href: `https://instagram.com/andrewjunyoung`
          },
          {
            title: `Github`,
            href: `https://github.com/andrewjunyoung/`
          },
          {
            title: `LinkedIn`,
            href: `https://inkedin.com/in/andrewjunyoung/`
          },
          {
            title: `Facebook`,
            href: `https://facebook.com/andrewjunyoung/`
          },
          ]
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        short_name: `ajy`,
        description: `Minimalistic portfolio site with masonry grid, page transitions and big images. Themeable with Theme UI.`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#3182ce`,
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
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
