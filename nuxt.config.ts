// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    "@vite-pwa/nuxt",
  ],
  app: {
    head: {
      title: "Rise Pay",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "We make it easy for you to hire, onboard, and pay your global team in fiat or crypto, while ensuring full tax compliance.",
        },
        // OG
        {
          property: "og:url",
          content: "https://pay.riseworks.io",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: "Rise Pay",
        },
        {
          property: "og:description",
          content:
            "We make it easy for you to hire, onboard, and pay your global team in fiat or crypto, while ensuring full tax compliance.",
        },
        {
          property: "og:image",
          content:
            "https://uploads-ssl.webflow.com/624f0c4263953ffe82f4e446/63b3509f28b47fe5ff366646_homepage.png",
        },
        // Twitter
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          property: "twitter:domain",
          content: "riseworks.io",
        },
        {
          property: "twitter:url",
          content: "https://www.riseworks.io/",
        },
        {
          name: "twitter:title",
          content: "Rise | Crypto Payroll & Web3 Workforce Solutions",
        },
        {
          name: "twitter:description",
          content: "We make it easy for you to hire, onboard, and pay your global team in fiat or crypto, while ensuring full tax compliance.",
        },
        {
          name: "twitter:image",
          content: "https://assets-global.website-files.com/624f0c4263953ffe82f4e446/63b3509f28b47fe5ff366646_homepage.png",
        },
      ],
    }
  },
  pwa: {
    srcDir: "./service-worker",
    filename: "sw.js",
    strategies: "injectManifest",
    injectRegister: false,

    injectManifest: {
      globPatterns: [
        "**/*.{js,json,css,txt,svg,png,ico,webp,woff,woff2,ttf,eot,otf,wasm}",
      ],
      globIgnores: ["manifest**.webmanifest"],
    },

    // default config
    includeAssets: ["favicon/favicon.ico", "favicon/safari-pinned-tab.svg"],
    manifest: {
      name: "Rise Pay",
      short_name: "Rise",
      description: "Global Workforce Payments & Compliance",
      theme_color: "#5E59EB",
      icons: [
        {
          src: "/pwa/rise_x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/pwa/rise_x192_mask.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "/pwa/rise_x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/pwa/rise_x512_mask.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
  },
})
