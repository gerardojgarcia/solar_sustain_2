// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in'}
  },  
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', 'nuxt-aos'],
})