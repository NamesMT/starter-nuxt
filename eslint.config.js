import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

async function asyncWrap() {
  return antfu(
    {
      unocss: true,
      ignores: [
        'assets/primevue/**',
      ],
    },
    // Include @nuxt/eslint configs
    await withNuxt(),
    // Allow trailing space for markdown formatting
    {
      files: ['*.md'],
      rules: {
        'style/no-trailing-spaces': 'off',
      },
    },
    {
      rules: {
      // Allow trailing space in comments, for possible JSDoc formattings
        'style/no-trailing-spaces': ['error', { ignoreComments: true }],
        // Relaxes inline statements a bit
        'style/max-statements-per-line': ['error', { max: 2 }],
      },
    },
  )
}

export default asyncWrap()
