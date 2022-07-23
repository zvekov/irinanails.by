<script setup lang="ts">
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
