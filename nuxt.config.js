import client from "./sanity.js"

export default {
  /*
   ** Headers of the page
   */
  head: {
    title: "Suko Organic Shop",
    htmlAttrs: {
      lang: 'sq-AL',
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Suko Organic Shop"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      // Snipcart styling
      {
        href: "/snipcart.css",
        type: "text/css",
        rel: "stylesheet"
      }
    ],
    script: [
      // jQuery. Only needed for snipcart
      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"
      },
      // Snipcart js
      {
        src: "/snipcart.js",
        id: "snipcart",
        "data-autopop": "false",
        // Change me. Read more at http://snipcart.com
        "data-api-key":
          "MzBmN2ZkNjAtYzdhOC00NTljLTk1MTMtNGExOGVjNzc2OTUxNjM3MTEzMDc3MzgyNDAxMjg0"
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Load categories and vendors
   */
  plugins: ["~/plugins/globalData"],
  /*
   ** Global CSS
   */
  css: ["~/css/global.css"],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** postcss
     */
    postcss: [require("postcss-cssnext")()],
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: async function() {
      const paths = await client.fetch(`{
        "product": *[_type == "product"].slug.current,
        "category": *[_type == "category"].slug.current,
        "vendor": *[_type == "vendor"].slug.current
      }`)
      return Object.keys(paths).reduce(
        (acc, key) => [
          ...acc,
          ...paths[key].reduce((acc, curr) => [...acc, `${key}/${curr}`], [])
        ],
        []
      )
    }
  }
}
