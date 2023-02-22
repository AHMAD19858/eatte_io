// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',

  ],

  app: {
    head: {
      title: 'EATTE-Super-Admin',
      link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://eatte.io/img/png/logo.png' }],
    },

  },
  colorMode: {
    classSuffix: '',

  },
  tailwindcss: {
    cssPath: './assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
})
