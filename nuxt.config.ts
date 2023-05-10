// https://nuxt.com/docs/api/configuration/nuxt-config
const NODE_ENV:String = 'dev';
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    'nuxt-swiper',
    'nuxt-headlessui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/google-fonts',
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
  googleFonts: {
    families: {
      Montserrat: true,
    }
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
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: process.env.API_BASE_URL,
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: '/api'
    }
  },

})
