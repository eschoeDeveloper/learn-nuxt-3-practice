// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'netlify',
  },
  // routeRules: {
  //   '/api/*': { prerender: true },
  //   '/auth/*': { prerender: true },
  // },
  typescript: {
    shim: false,
    typeCheck: true,
  },

  modules: [
    'nuxt-quasar-ui',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],

  i18n: {
    locales: ['en', 'ko'], // URL 경로 접두사에 사용됨
    defaultLocale: 'ko', // Nuxt 페이지 및 라우팅을 위한 프로젝트의 기본 로케일
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },

  quasar: {
    /* */
    plugins: ['Notify'],
    config: {
      notify: {
        position: 'top-right',
      },
    },
  },

  imports: {},
  compatibilityDate: '2025-01-20',
});
