import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'

import type { VueQueryPluginOptions } from '@tanstack/vue-query'

export default defineNuxtPlugin((nuxt) => {
  const queryClient = new QueryClient()
  const options: VueQueryPluginOptions = { queryClient }

  nuxt.vueApp.use(VueQueryPlugin, options)
})
