<script lang="ts" setup>
import {computed} from 'vue'

const options = {
  base: 'app1lBv7h0eWAJ4uO',
  table: 'Блоки',
  fields: ['Images'],
  maxRecords: '1',
  filterByFormula: '{Name}="Портфолио"'
}

const {
  pending,
  data: portfolio
} = await useLazyFetch(useAirtable(options), useAuth())

const images = computed(() => portfolio?.value.records[0]?.fields?.Images)

</script>

<template>
  <section id="portfolio" :class="$style.portfolio" class="py-48">
    <div class="container flex flex-col items-center">
      <h2 data-aos="fade-up">Портфолио</h2>
      <div v-if="pending" class="py-16">
        Подождитe...
      </div>
      <ui-gallery
          v-else
          galleryID="portfolio-gallery"
          :images="images"
          class=" grid grid-cols-1 md:grid-cols-3 gap-8 py-16"
          data-aos="fade-up"/>
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

  &__button {
    @apply mb-auto;
    max-width: 20rem;
  }
}
</style>
