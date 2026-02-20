// plugins/supabase.client.ts
import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const supabase = createClient(config.public.supabaseUrl, config.public.supabasePublishableKey)
  nuxtApp.provide('supabase', supabase)
})