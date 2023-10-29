// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // meta
    app: {
        buildAssetsDir: "/static/",
        rootId: "app",
        // pageTransition: {name: "page", mode: "out-in"},
        head: {
            charset: "utf-8",
            htmlAttrs: {
                "lang": "ru-RU"
            },
            link: [
                {rel: "icon", type: "image/x-icon", href: "/favicon.ico"}
            ],
            meta: [
                {
                    name: "description",
                    content: "Тот самый бар, который близок каждому. Атмосферное место для ценителей хорошего вина."
                }
            ],
            title: "By The Wine – ресторан-бар в центре Москвы",
            viewport:
                'width=device-width, initial-scale=1.0 viewport-fit=cover',
        }
    },
    sourcemap: true,
    // css
    css: ['~/assets/scss/app.scss'],

    // modules
    modules: [
        '@vueuse/nuxt',
        "@nuxt/image",
        "@pinia/nuxt",
        '@nuxtjs/tailwindcss'
    ],

    // build modules

    // auto import components
    components: {
        dirs: ['~/components']
    },

    // build
    build: {
        transpile: [
            "pinia",
        ],
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
        },
        build: {
            // sourcemap: true,
            target: "esnext",
        },
    },

    // image config
    image: {
        // domains: ['dl.airtable.com'],
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
    },
});
