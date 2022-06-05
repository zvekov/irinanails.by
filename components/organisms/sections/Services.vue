<script lang="ts" setup>
const config = useRuntimeConfig().public
const {
  pending,
  data: services
} = await useLazyFetch(`${config.airtableEndpointUrl}/app1lBv7h0eWAJ4uO/Услуги?fields%5B%5D=Name&fields%5B%5D=svgIcon&fields%5B%5D=Description&maxRecords=all&view=Grid%20view&filterByFormula={forServices}`, {
  headers: {Authorization: `Bearer ${config.airtableApiKey}`},
})

// const {
//   pending,
//   data: prices
// } = await useLazyFetch(`${config.airtableEndpointUrl}/app1lBv7h0eWAJ4uO/Услуги?fields%5B%5D=Name&fields%5B%5D=Price&maxRecords=all&view=Grid%20view&filterByFormula={forPrices}`, {
//   headers: {Authorization: `Bearer ${config.airtableApiKey}`},
// })

</script>

<template>
  <section id="services" :class="$style.services">
    <div class="container flex flex-col items-center">
      <h2 data-aos="fade-up">Услуги</h2>
      <div v-if="pending" class="py-16">
        Подождитe...
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-16 py-16">
        <div v-for="item in services.records"
             :key="item.id"
             :class="$style.services__item"
             data-aos="fade-up">
          <span v-if="item.fields.svgIcon" v-html="item.fields.svgIcon"/>
          <h3>{{ item.fields.Name }}</h3>
          <p class="text-center text-lg">{{ item.fields.Description }}</p>
        </div>
      </div>
      <ui-button
          :class="$style.services__button"
          :isExternal="true"
          :href="'#replain-link'"
          :target="'_self'"
          data-aos="fade-up">
        Записаться онлайн
      </ui-button>
    </div>
  </section>
</template>
<style lang="scss" module>
.services {
  @apply pt-48 pb-48 md:pb-32;

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
    @apply mb-auto;
    max-width: 20rem;
  }
}
</style>
