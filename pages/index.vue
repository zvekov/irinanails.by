<script setup lang="ts">
const title = 'Кабинет маникюра и педикюра в Жлобине'
const description = 'Профессиональный ногтевой сервис в центре Жлобина. Только качественные материалы. Запись: +375 25 939 10 73'
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
    }
  ]
})

// const options = {
//   base: 'app1lBv7h0eWAJ4uO',
//   table: 'Услуги',
//   fields: ['Name', 'svgIcon', 'Description'],
//   maxRecords: 'all',
//   filterByFormula: '{forServices}'
// }
//
// const {
//   pending,
//   data: services
// } = await useAsyncData('data', () => $fetch(useAirtable(options), useAuth()))
//
//
// const config = useRuntimeConfig()
// console.log('Runtime config:', config)
// if (process.server) {
//   console.log('API secret:', config.airtableApiKey)
// }
</script>

<template>
  <div>
    {{services}}
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
    <organisms-hero/>
    <organisms-about  />
    <organisms-services/>
    <organisms-prices />
    <organisms-portfolio />
    <organisms-contacts />
  </div>
</template>
