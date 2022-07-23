import {defineNuxtConfig} from 'nuxt'

export default defineNuxtConfig({
    // meta
    meta: {
        meta: [
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'preload', href: '/ph.webp', as: 'image'}
        ],
        htmlAttrs: {
            'lang': 'ru_RU'
        },
        script: [],
    },

    // css
    css: ['~/assets/scss/app.scss'],

    // modules
    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss'
    ],

    // build modules
    buildModules: ['@pinia/nuxt'],

    // auto import components
    components: {
        dirs: ['~/components']
    },

    // build
    build: {},

    // postcss plugins
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    // vite plugins
    vite: {
        logLevel: "info",
        optimizeDeps: {
            include: [
                'vue',
                'vue-yandex-maps'
            ]
        },
        css: {
            modules: {
                generateScopedName: "[hash:8]",
            }
        }
    },

    // runtime config
    runtimeConfig: {
        public: {
            gtmId: process.env.GTM_ID
        }
    }
})
