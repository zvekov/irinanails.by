import {defineNuxtConfig} from 'nuxt'

export default defineNuxtConfig({
    // meta
    meta: {
        meta: [
            {name: 'viewport', content: 'width=device-width, initial-scale=1.0 viewport-fit=cover'},
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
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
        '@nuxt/image-edge',
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

    // postcss config
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    // vite config
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

    // image config
    image: {
        domains: ['dl.airtable.com'],
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
        },
    },

    // runtime config
    runtimeConfig: {
        public: {
            gtmId: process.env.GTM_ID
        }
    }
})
