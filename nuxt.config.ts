// https://nuxt.com/docs/api/configuration/nuxt-config

const defaultTheme = require("tailwindcss/defaultTheme");

export default defineNuxtConfig({
  build: {
    transpile: ["tslib"],
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/apollo", "@nuxtjs/tailwindcss", "@nuxt/image"],
  apollo: {
    clients: {
      default: {
        httpEndpoint:
          "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clpgr2zbkr4ju01t602sicyv3/master",
      },
    },
  },
  css: ["assets/font.css","@fortawesome/fontawesome-free/css/all.css"],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ["Roboto", ...defaultTheme.fontFamily.sans],
            serif: ["Titan One", ...defaultTheme.fontFamily.serif],
          },
        },
      },
    },
  },
});