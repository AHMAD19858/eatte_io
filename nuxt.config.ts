// https://nuxt.com/docs/api/configuration/nuxt-config
const NODE_ENV:String = 'dev';
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    'nuxt-swiper',
    'nuxt-headlessui'
  ],

  app: {
    head: {
      title: 'EATTE-All-in-One Restaurant Management & Ordering System',
      link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://eatte.io/img/png/logo.png' }],
      meta: [
        // <meta name="description" content="My amazing site">
        { hid: 'og-url', property: 'https://eatte.io/img/png/logo.png', content: 'https://eatte.io/img/png/logo.png' },
      ],
    },
    // buildAssetsDir:'/new-design/',
    //baseURL:'/new-design/',
    baseURL: NODE_ENV === 'production' ? '/new-design/' : '/'

  },
  headlessui: {
    prefix: 'Headless'
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
