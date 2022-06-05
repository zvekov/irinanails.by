<script lang="ts" setup>
const config = useRuntimeConfig().public
const {
  pending,
  data: prices
} = await useLazyFetch(`${config.airtableEndpointUrl}/app1lBv7h0eWAJ4uO/Услуги?fields%5B%5D=Name&fields%5B%5D=Price&maxRecords=all&view=Grid%20view&filterByFormula={forPrices}`, {
  headers: {Authorization: `Bearer ${config.airtableApiKey}`},
})
</script>

<template>
  <section id="prices" :class="$style.prices" class="bg-cloud">
    <div class="container flex flex-col items-center pt-16 pb-8">
      <h2 data-aos="fade-up">Цены</h2>
      <div v-if="pending" class="py-16" data-aos="fade-up">
        Подождитe...
      </div>
      <div v-else class="grid grid-cols-1 gap-y-4 gap-x-2 pt-16 text-lg">
        <div v-for="item in prices.records" :key="item.id" :class="$style.prices__item"
             data-aos="fade-up"
             data-aos-anchor-placement="top-bottom">
          <span :class="$style.prices__item__title">{{ item.fields.Name }}</span>
          <span class="w-20 text-right">{{ item.fields.Price }} BYN</span>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" module>
.prices {
  @apply relative;
  background-color: #FEF0EB;

  h2 {
    @apply font-bold text-4xl text-center;
  }

  h3 {
    @apply font-bold text-xl text-center px-8;
  }

  &__item {
    @apply flex justify-between relative w-[20rem];
  }
}
</style>
