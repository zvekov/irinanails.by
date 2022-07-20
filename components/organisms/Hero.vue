<script setup>
import {useWindowSize} from '@vueuse/core'
import {computed} from "vue";
import {marked} from "marked";

const {height} = useWindowSize()
const options = {
  base: 'app1lBv7h0eWAJ4uO',
  table: 'Настройки',
  fields: ['address', 'workTime', 'phone'],
  maxRecords: '1',
  filterByFormula: '{Сайт}="irinanails.by"'
}
const {
  pending,
  data: information
} = await useLazyFetch(useAirtable(options), useAuth())
const address = computed(() => marked(information?.value.records[0]?.fields?.address))
const workTime = computed(() => marked(information?.value.records[0]?.fields?.workTime))
const phone = computed(() => information?.value.records[0]?.fields?.phone)
</script>

<template>
  <section id="hero" :class="$style.hero">
    <div class="container flex flex-col justify-center items-center">
      <atoms-logo class="mb-4"/>
      <h1 class="mb-8">Кабинет маникюра <br/>и педикюра в Жлобине</h1>
      <molecules-hero-information
          :workTime="workTime"
          :address="address"
          :phone="phone"
          :class="height <= 627 ? 'mb-4' : 'mb-8'"/>
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
