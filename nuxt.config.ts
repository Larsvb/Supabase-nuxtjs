// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2026-02-20',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_SUPABASE_URL,
      supabasePublishableKey: process.env.NUXT_SUPABASE_PUBLISHABLE_KEY,
    },
  },
})