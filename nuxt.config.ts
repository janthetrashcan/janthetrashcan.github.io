import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui'
  ],
  fonts: {
    families: [
      {
        name: 'Raleway',
        provider: 'google',
        weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
      },
    ]
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/transitions.css',
  ],
  app: {
    // pageTransition: {
    //   name: 'page',
    //   mode: 'out-in'
    // },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  image: {
    dir: 'public',
    formats: ['webp', 'jpg', 'png', 'svg'],
  }
});