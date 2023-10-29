import Particles from "particles.vue3";

export default defineNuxtPlugin( ( nuxtApp ) => {
    nuxtApp.vueApp.use( Particles, {} )
} );