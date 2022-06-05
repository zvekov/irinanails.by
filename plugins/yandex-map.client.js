import YmapPlugin from 'vue-yandex-maps'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()

    nuxtApp.vueApp.use(YmapPlugin, {
        apiKey: config.yandexApiKey,
        lang: 'ru_RU',
        coordorder: 'latlong',
        enterprise: false,
        version: '2.1'
    })
})
