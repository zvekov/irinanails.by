<script lang="ts" setup>
import {computed} from 'vue'

const options = {
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
  <ui-section id="portfolio" :class="$style.portfolio" title="Портфолио">
    <div v-if="pending" class="py-16">
      Подождитe...
    </div>
    <ui-gallery
        v-else
        galleryID="portfolio-gallery"
        :images="images"
        class=" grid grid-cols-1 md:grid-cols-3 gap-8 py-16"
        data-aos="fade-up"/>
    <div data-aos="fade-up">
      <ui-button
          :class="$style.portfolio__button"
          :isExternal="true"
          :href="'https://www.instagram.com/irina_nails_zhlobin/'">
        Больше работ в инстаграме
      </ui-button>
    </div>
  </ui-section>
</template>
<style lang="scss" module>
.portfolio {
  @apply py-48;

  &__button {
    @apply mb-auto w-[20rem];
  }
}
</style>
