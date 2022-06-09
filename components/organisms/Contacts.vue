<script setup>
import {ref, onMounted} from 'vue'
import {yandexMap, ymapMarker} from 'vue-yandex-maps'

const map = ref()
const pageReady = ref(false)
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
  <ui-section title="На карте" bg="cloud bg-cloud-t">
      <div data-aos="fade-up" class="pt-16 pb-8 w-full h-full z-50">
        <component v-if="pageReady" ref="map" :is="yandexMap" id="map"
                   :class="$style.contacts__map"
                   :coords="coords"
                   :zoom="17"
                   :map-type="settings.type"
                   :scroll-zoom="false"
                   :behaviors="settings.behaviors"
        >
          <component :is="ymapMarker" :coords="coords" :icon="markerIcon" :markerId="1"/>
        </component>
      </div>
      <div  class="z-40" data-aos="zoom-in-down" data-aos-duration="500" >
        <atoms-yandex-taxi-button class="mb-16 hover:scale-105 transition-all"/>
      </div>
  </ui-section>
</template>
<style lang="scss" module>
.contacts {
  background-color: #FEF0EB;
  &::after {
    @apply h-0 p-0 m-0;
    background-image: none;
  }
  h2 {
    @apply font-bold text-4xl text-center;
  }

  &__map {
    @apply w-full h-[28rem] rounded-lg;
    filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.15))
  }

}
</style>
