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
  @apply pt-6 pb-40 md:pb-48;

  & h1 {
    @apply text-2xl text-center font-light;
  }

  &__button {
    @apply mb-auto w-[20rem];
  }
}
</style>
