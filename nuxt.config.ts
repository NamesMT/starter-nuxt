// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
  ],

  css: [
    '@unocss/reset/tailwind.css',
  ],

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  // @nuxt/eslint
  eslint: {
    config: {
      standalone: false,
    },
  },
})
