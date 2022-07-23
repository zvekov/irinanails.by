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
import {useServicesStore, useSettingsStore} from '@/stores'
const {fetchServices} = useServicesStore()
const {fetchSettings} = useSettingsStore()
fetchSettings()
fetchServices()
</script>

<template>
  <div>
    <molecules-seo-schema />
    <atoms-particles class="w-full h-full z-[-1] absolute max-w-full max-h-full" />
    <organisms-hero/>
    <organisms-about  />
    <organisms-services />
    <organisms-prices />
    <organisms-portfolio />
    <organisms-contacts />
  </div>
</template>
