<script setup>
import { ref, onMounted } from 'vue'
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

const map = ref()
const  pageReady = ref(false)
const settings = {
  type: "map", // Допустимые значения: map, satellite, hybrid.
  behaviors: ["multiTouch"], // Отключаем скроллинг карты в мобиле. Работает при нажатии двумя пальцами
}
const coords = [52.892, 30.035675]
const markerIcon = {
  layout: "default#image",
  imageHref: "/marker.png",
  imageSize: [181, 100],
  imageOffset: [-89, -99]
}

onMounted(() => {
  map.value
  pageReady.value = true
})
</script>

<template>
  <section id="contacts" :class="$style.contacts" class="relative">
    <div class="container flex flex-col items-center pt-16">
      <h2 data-aos="fade-up">На карте</h2>
      <div data-aos="fade-up" class="my-16 w-full h-full">
        <component v-if="pageReady" ref="map" :is="yandexMap" id="map"
             :class="$style.contacts__map"
            :coords="coords"
            :zoom="17"
            :map-type="settings.type"
            :scroll-zoom="false"
            :behaviors="settings.behaviors"
        >
          <component :is="ymapMarker" :coords="coords" :icon="markerIcon" :markerId="1" />
        </component>
      </div>
      <atoms-yandex-taxi-button class="mb-16" data-aos="fade" />
    </div>
  </section>
</template>
<style lang="scss" module>
.contacts {

  h2 {
    @apply font-bold text-4xl text-center;
  }

  &__map {
    @apply w-full h-[30rem] rounded-lg;
    filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.15))
  }

}
</style>
