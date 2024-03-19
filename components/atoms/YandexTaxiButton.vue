<script setup>
// https://yandex.ru/dev/taxi/doc/dg/concepts/about.html

const options = {
  app_code: '3',
  query: {
    'start-lat': '',
    'start-lon': '',
    'end-lat': '52.893321',
    'end-lon': '30.044783',
    level: 'econom',
    ref: '2664500',
    appmetrica_tracking_id: '1178268795219780156',
    lang: 'ru'
  }
}
const url = `https://${options.app_code}.redirect.appmetrica.yandex.com/route?` + new URLSearchParams(options.query)

const text = 'Вызвать такси до'
const address = 'ул. Первомайская, 47'

const clickYandexGo = () => {
  window.ym(45820515,'reachGoal','openYandexGo')
}
</script>


<template>
  <a :href="url" @click="clickYandexGo" :class="$style.yandexTaxiBtn">
    <span :class="$style.yandexTaxiBtn__icon">

    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
      <mask id="a" width="32" height="32" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha">
        <path fill="#fff" d="M0 0h32v32H0V0Z"/>
      </mask>
      <g mask="url(#a)">
        <path fill="url(#b)" d="M0 0h32v32H0V0Z"/>
        <path fill="#F3F5F5" d="M0 16h16v16H0V16Z"/>
        <path fill="url(#c)" d="M0 16h16v16H0V16Z"/>
        <path fill="#333337" d="M16 16h16v16H16V16Z"/>
        <path fill="url(#d)" d="M16 16h16v16H16V16Z"/>
      </g>
      <defs>
        <linearGradient id="b" x1="16" x2="16" y1="0" y2="32" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFDA02"/>
          <stop offset=".497" stop-color="#FFB101"/>
          <stop offset="1" stop-color="#FF9500"/>
        </linearGradient>
        <linearGradient id="c" x1="8" x2="8" y1="16" y2="32" gradientUnits="userSpaceOnUse">
          <stop stop-color="#fff" stop-opacity="0"/>
          <stop offset="1" stop-color="#D7DEDE"/>
        </linearGradient>
        <linearGradient id="d" x1="24" x2="24" y1="16" y2="32" gradientUnits="userSpaceOnUse">
          <stop stop-opacity="0"/>
          <stop offset="1" stop-color="#363739"/>
        </linearGradient>
      </defs>
    </svg>


    </span>
    <span class="font-bold row-span-1 col-span-3">{{text}}</span>
    <span class="row-span-1 col-span-3 opacity-70">{{address}}</span>
  </a>
</template>

<style lang="scss" module>
.yandexTaxiBtn {
  @apply w-[14.5rem] bg-white rounded-lg py-2 grid grid-rows-2 grid-cols-4 items-center;
  filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.15));

  &__icon {
    @apply row-span-2 col-span-1 mx-auto;

    & svg {
      @apply rounded-md;
      filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
    }
  }
}
</style>
