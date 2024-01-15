export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-primevue', '@nuxtjs/tailwindcss'],
  primevue: {
    cssLayerOrder: 'reset,primevue,tailwind',
  },
  css: ['~/assets/css/tailwind.css'],
})
