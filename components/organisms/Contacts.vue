<script setup>
import {ref, onMounted} from 'vue'
import {YandexMap, YandexMarker} from 'vue-yandex-maps'

const map = ref()
const pageReady = ref(false)
const settings = {
  type: "map", // Допустимые значения: map, satellite, hybrid.
  behaviors: ["multiTouch"], // Отключаем скроллинг карты в мобиле. Работает при нажатии двумя пальцами
}
const coords = [52.89338, 30.044783]
const markerIcon = {
  iconLayout: "default#image",
  iconImageHref: "/marker.png",
  iconImageSize: [181, 100],
  iconImageOffset: [-89, -99]
}

onMounted(() => {
  map.value
  pageReady.value = true
})
</script>

<template>
  <ui-section title="На карте" bg="cloud bg-cloud-t">
      <div data-aos="fade-up" class="pt-16 pb-8 w-full h-full z-50">
        <client-only>
          <YandexMap v-if="pageReady" ref="map" id="map"
                   :class="$style.contacts__map"
                   :coordinates="coords"
                   :zoom="17"
                   :map-type="settings.type"
                   :scroll-zoom="false"
                   :behaviors="settings.behaviors"
        >
          <YandexMarker :coordinates="coords" :options="markerIcon" :markerId="1"/>
        </YandexMap>
        </client-only>
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
