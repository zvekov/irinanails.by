<script setup>
import {useWindowSize} from '@vueuse/core'

const {height} = useWindowSize()

// const clickEvent = () => {
//   window.ym(45820515,'reachGoal','openChat')
// }
</script>

<template>
  <section id="hero" :class="$style.hero">
    <div class="container flex flex-col justify-center items-center">
      <atoms-logo class="mb-4"/>
      <h1 class="mb-8 md:hidden">Кабинет маникюра <br/>и педикюра в Жлобине</h1>
      <molecules-hero-information :class="height <= 627 ? 'mb-4' : 'mb-8'"/>
      <ui-button :class="$style.hero__button" :isExternal="true" :href="'#replain-link'" :target="'_self'">
        Записаться онлайн
      </ui-button>
      <!--      <atoms-eclipse-left class="absolute left-0 top-0 ml-2 -mt-2 opacity-70"/>-->
      <!--      <atoms-eclipse-right class="absolute right-0 bottom-0 mr-4 mb-[calc(100%+4rem)] opacity-80"/>-->
    </div>
  </section>
</template>

<style lang="scss" module>
.hero {
  @apply pt-6 pb-24;
  //background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='400' preserveAspectRatio='none' viewBox='0 0 1440 400'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1162%26quot%3b)' fill='none'%3e%3crect width='1440' height='400' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M1536 400L0 400 L0 355.06Q70.98 354.04%2c 72 425.03Q118.25 351.28%2c 192 397.53Q220.38 353.9%2c 264 382.28Q276.66 322.94%2c 336 335.6Q404.96 284.56%2c 456 353.53Q538.5 316.02%2c 576 398.52Q602.97 353.49%2c 648 380.45Q700.79 313.24%2c 768 366.02Q781.88 307.9%2c 840 321.78Q882.4 292.18%2c 912 334.59Q1006.24 308.82%2c 1032 403.06Q1040.26 339.32%2c 1104 347.59Q1170.37 293.95%2c 1224 360.32Q1268.53 284.85%2c 1344 329.37Q1388.65 302.02%2c 1416 346.67Q1508.96 319.63%2c 1536 412.6z' fill='rgba(254%2c 240%2c 235%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1162'%3e%3crect width='1440' height='400' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  //background-position-y: 4.25rem;

  & h1 {
    @apply text-2xl text-center font-light;
  }

  &__button {
    @apply mb-auto w-[20rem];
  }
}
</style>
