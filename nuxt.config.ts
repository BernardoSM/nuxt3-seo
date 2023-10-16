// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
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
  }
})
