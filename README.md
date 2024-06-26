# DEPRECATED template
Lately for my new projects I have been using the [starter-fullstack](https://github.com/NamesMT/starter-fullstack) template, I think the monorepo config of that template is structured way better and future-proof if the project grows.

Maintaining this template here causes some duplicated work and to save time, I decided to deprecate it here, this template will now lives on and is maintained at [`starter-fullstack/apps/frontend`](https://github.com/NamesMT/starter-fullstack/tree/main/apps/frontend).

# Nuxt 3 ~~Minimal~~ Preconfigured Starter

Note: the app comes with a `localcert` SSL for local development, generated with [mkcert](https://github.com/FiloSottile/mkcert), you can install mkcert's local CA to remove the untrusted SSL warning 

## Features:
- ESLint
  - [@nuxt/eslint](https://eslint.nuxt.com/packages/module)
  - [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- [UnoCSS](https://unocss.dev/guide/)
  - UnoCSS is an atomic CSS engine, similar to Tailwind but is super fast and have some amazing features like automatically imported icons in pure CSS.
- PrimeVue
  - Using [tailwind preset mode](https://tailwind.primevue.org/nuxt/)
- Shadcn/vue
  - Configured for UnoCSS with [hyoban/unocss-preset-shadcn](https://github.com/hyoban/unocss-preset-shadcn)
  - Share the primary color and could work in parallel with PrimeVue
- [ColorMode](https://github.com/nuxt-modules/color-mode)
  - Dark and Light mode with auto detection made easy with Nuxt.
- [NuxtImage](https://image.nuxt.com/)
  - Automatically optimized images for the app, as well as placeholder support

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies: `pnpm install`

## Development Server

Start the development server: `pnpm run dev`

## Production

Build the application for production: `pnpm run build`

Locally preview production build: `pnpm run preview`

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
