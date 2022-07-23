<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import {storeToRefs} from 'pinia'
import { useServicesStore } from '@/stores'

const {getServicesForServices, loading} = storeToRefs(useServicesStore())
const breakpoints = useBreakpoints(breakpointsTailwind)
const lg = breakpoints.isGreater('lg')
</script>

<template>
  <ui-section id="services" :class="$style.services" title="Услуги" bg="white">
    <div v-if="loading" class="py-16">
      Подождитe...
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-16 py-16">
      <div v-for="(item, index) in getServicesForServices"
           :key="index"
           :class="$style.services__item"
           data-aos="fade-up"
           :data-aos-delay="lg ? `${index+1}00` : 0"
      >
        <span v-if="item.fields.svgIcon" v-html="item.fields.svgIcon"/>
        <h3>{{ item.fields.Name }}</h3>
        <p class="text-center text-lg">{{ item.fields.Description }}</p>
      </div>
    </div>
    <div data-aos="fade-up">
      <ui-button
          :class="$style.services__button"
          :isExternal="true"
          :href="'#replain-link'"
          :target="'_self'"
      >
        Записаться онлайн
      </ui-button>
    </div>
  </ui-section>
</template>
<style lang="scss" module>
.services {
  @apply pt-48 pb-48 bg-white z-[-1];

  h2 {
    @apply font-bold text-4xl text-center;
  }

  h3 {
    @apply font-bold text-xl text-center px-8;
  }

  &__item {
    @apply flex flex-col items-center gap-4;
    max-width: 20rem;

    & span svg {
      @apply w-40 h-40;
    }
  }

  &__button {
    @apply mb-auto w-[20rem];
  }
}
</style>
