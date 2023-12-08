// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-icons',
    '@nuxt/image',
    'vue3-carousel-nuxt',
    'nuxt-aos',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  aos: {
    disable: 'phone',
    duration: 1000,
    once: true,
  },
  //ssr: false,
})
