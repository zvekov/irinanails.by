import YmapPlugin from 'vue-yandex-maps'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(YmapPlugin, {
        apiKey: import.meta.env.VITE_YANDEX_API_KEY,
        lang: 'ru_RU',
        coordorder: 'latlong',
        enterprise: false,
        version: '2.1'
    })
})
