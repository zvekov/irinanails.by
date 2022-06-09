<script setup>
import {useWindowSize} from '@vueuse/core'

const {height} = useWindowSize()

</script>

<template>
  <section id="hero" :class="$style.hero">
    <atoms-particles class="w-full h-full z-[-1] absolute max-w-full max-h-full" />
    <div class="container flex flex-col justify-center items-center">
      <atoms-logo class="mb-4"/>
      <h1 class="mb-8">Кабинет маникюра <br/>и педикюра в Жлобине</h1>
      <molecules-hero-information :class="height <= 627 ? 'mb-4' : 'mb-8'"/>
      <ui-button
          :class="$style.hero__button"
          :isExternal="true"
          :href="'#replain-link'"
          :target="'_self'"
      >
        Записаться онлайн
      </ui-button>
    </div>
  </section>
</template>

<style lang="scss" module>
.hero {
  @apply relative pt-6 pb-40 md:pb-48;

  & h1 {
    @apply text-2xl text-center font-light;
  }

  &__button {
    @apply mb-auto w-[20rem];
  }
}
</style>
