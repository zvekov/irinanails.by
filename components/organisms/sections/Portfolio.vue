<script lang="ts" setup>
const config = useRuntimeConfig().public
import {computed} from 'vue'

const {
  pending,
  data: portfolio
} = await useLazyFetch(`${config.airtableEndpointUrl}/app1lBv7h0eWAJ4uO/Блоки?&fields%5B%5D=Images&maxRecords=1&view=Grid%20view&filterByFormula={Name}="Портфолио"`, {
  headers: {Authorization: `Bearer ${config.airtableApiKey}`},
})
const images = computed(() => portfolio?.value.records[0]?.fields?.Images)
</script>

<template>
  <section id="portfolio" :class="$style.portfolio" class="pt-48 pb-24">
    <div class="container flex flex-col items-center">
      <h2 data-aos="fade-up">Портфолио</h2>
      <div v-if="pending" class="py-16">
        Подождитe...
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
        <div v-for="item in images" :key="item.id"
             :class="$style.portfolio__item" data-aos="fade-up">
          <img :src="item.thumbnails.large.url" width="320" height="320" loading="lazy"/>
        </div>
      </div>
      <ui-button
          :class="$style.portfolio__button"
          :isExternal="true"
          :href="'https://www.instagram.com/irina_nails_zhlobin/'"
          data-aos="fade-up">
        Больше работ в инстаграме
      </ui-button>
    </div>
  </section>
</template>
<style lang="scss" module>
.portfolio {
  h2 {
    @apply font-bold text-4xl text-center;
  }

  h3 {
    @apply font-bold text-xl text-center px-8;
  }

  &__item {
    @apply w-[20rem] h-[20rem];

    & img {
      @apply w-full h-full object-cover object-center rounded-lg;
      filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.15))
    }
  }

  &__button {
    @apply mb-auto;
    max-width: 20rem;
  }
}
</style>
