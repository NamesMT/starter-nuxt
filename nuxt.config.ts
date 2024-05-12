import path from 'node:path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  devServer: {
    https: true,
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  vue: {
    propsDestructure: true,
  },

  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/image',
    'nuxt-primevue',
    'shadcn-nuxt',
  ],

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: 'Shad',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './app/lib/components/ui',
  },

  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/css/main.scss',
  ],

  // nuxt-primevue
  primevue: {
    options: {
      unstyled: true,
      ripple: true,
    },
    importPT: { from: path.resolve(__dirname, './app/assets/vendor/primevue/presets/lara/') },
  },

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
