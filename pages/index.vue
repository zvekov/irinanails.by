<script setup lang="ts">
import {useServicesStore} from '@/stores/services'
import {useSettingsStore} from "~/stores/settings";
import {computed} from "vue";

const {fetchServices} = useServicesStore()
const {fetchSettings} = useSettingsStore()
fetchSettings()
fetchServices()
const route = useRoute()
const title = 'Кабинет маникюра и педикюра в Жлобине'
const description = 'Профессиональный ногтевой сервис в центре Жлобина. Только качественные материалы. Запись: +375 25 939 10 73'
const url = import.meta.env.VITE_APP_URL
const image = `${url}/og-image.jpg`
const canonical = computed(() => {
  if (route.path === '/') {
    return url
  }
  return url + route.path
})
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
});
const jsonLdNail = {
  "@context": "http://www.schema.org",
  "@type": "NailSalon",
  "name": "Кабинет маникюра и педикюра в Жлобине – Irina Nails",
  "url": "https://irinanails.by",
  "logo": "https://irinanails.by/og-image.jpg",
  "priceRange": "$$",
  "image": "https://irinanails.by/og-image.jpg",
  "description": "Аппаратный и комбинированный маникюр, аппаратный педикюр, покрытие гель-лаком, укрепление ногтей, восстановление ногтей, оформление бровей, покраска и реконструкция ресниц (Velvet).",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Петровского 44, 3 этаж, каб. 3-14",
    "addressLocality": "Жлобин",
    "addressRegion": "Гомельская",
    "postalCode": "247210",
    "addressCountry": "Беларусь"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.7180682",
    "longitude": "29.0285755"
  },
  "hasMap": "https://g.page/irinanails",
  "openingHours": "Вт 10:00-19:00 Ср 10:00-19:00 Чт 10:00-19:00 Пт 10:00-19:00 Сб 10:00-19:00",
  "telephone": "+37529 939-10-73"
}
const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "https://irinanails.by",
  "logo": "https://irinanails.by/og-image.jpg",
}
useHead({
  script: [{
    type: 'application/ld-json',
    children: JSON.stringify(jsonLdNail),
  }, {
    type: 'application/ld-json',
    children: JSON.stringify(jsonLdOrg),
  }],
  link: [{rel: 'canonical', href: canonical.value}]
})
</script>

<template>
  <div>
    <client-only>
      <atoms-particles class="w-full h-full z-[-1] absolute max-w-full max-h-full" />
    </client-only>
    <organisms-hero/>
    <organisms-about  />
    <organisms-services />
    <organisms-prices />
    <organisms-portfolio />
    <organisms-contacts />
  </div>
</template>
