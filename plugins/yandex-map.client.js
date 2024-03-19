import plugin from 'vue-yandex-maps'
import { defineNuxtPlugin } from 'nuxt/app'


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(plugin, {
        apiKey: import.meta.env.VITE_YANDEX_API_KEY,
        lang: 'ru_RU',
        coordorder: 'latlong',
        enterprise: false,
        version: '2.1'
    })
})
