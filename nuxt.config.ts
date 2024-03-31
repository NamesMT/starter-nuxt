// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    https: true
  },

  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/image',
  ],

  css: [
    '@unocss/reset/tailwind.css',
  ],

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  // @nuxtjs/color-mode
  // Removing classSuffix to match UnoCSS default selectors
  colorMode: {
    classSuffix: '',
  },

  // @nuxt/eslint
  eslint: {
    config: {
      standalone: false,
    },
  },
})
