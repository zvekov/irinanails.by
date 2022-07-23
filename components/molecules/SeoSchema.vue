<script setup>
import {computed} from "vue";

const route = useRoute()
const title = 'Кабинет маникюра и педикюра в Жлобине'
const description = 'Профессиональный ногтевой сервис в центре Жлобина. Только качественные материалы. Запись: +375 25 939 10 73'
const url = import.meta.env.VITE_APP_URL
const image = `${url}/logo_jsonld.png`
const canonical = computed(() => {
  if (route.path === '/') {
    return url
  }
  return url + route.path
})
useMeta({
  title: title,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: description,
    },
    {
      hid: 'og:title',
      name: 'og:title',
      content: title,
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: description,
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: title,
    },
    {
      hid: 'og:image',
      name: 'og:image',
      content: image,
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: title,
    },
    {
      hid: 'og:url',
      name: 'og:url',
      content: url,
    },
    {
      hid: 'og:locale',
      name: 'og:locale',
      content: 'ru_RU',
    },
    {
      hid: 'og:type',
      name: 'og:type',
      content: 'website',
    }
  ],
  link: [{rel: 'canonical', href: canonical.value}]
})
</script>
<template>
  <Script type="application/ld+json" children='
      {
        "@context": "http://www.schema.org",
        "@type": "NailSalon",
        "name": "Кабинет маникюра и педикюра в Жлобине – Irina Nails",
        "url": "https://irinanails.by",
        "logo": "https://irinanails.by/logo_jsonld.png",
        "priceRange": "$$",
        "image": "https://irinanails.by/logo_jsonld.png",
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
      }'
  />
  <Script type="application/ld+json" children='{
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": "https://irinanails.by",
      "logo": "https://irinanails.by/logo_jsonld.png",
    }'
  />
</template>
