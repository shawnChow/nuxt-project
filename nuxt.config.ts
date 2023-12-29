export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss','@nuxtjs/apollo','@nuxt/image'],
  css: ['/assets/css/main.css'],
  ssr: true,
  experimental: {
      payloadExtraction: false
  },
  router: {
      options: {
          strict: false
      }
  },
  sourcemap: false,

  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://rickandmortyapi.com/graphql'
      }
    },
  },
  image: {
    domains: ['rickandmortyapi.com/']
  }

})