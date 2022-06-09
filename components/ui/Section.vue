<script setup>
defineProps({
  title: {
    type: String,
    default: null
  },
  bg: {
    type: String,
    default: 'none'
  }
})
</script>

<template>
  <section :class="`bg-${bg}`">
    <div class="container py-8 flex flex-col items-center">
      <h2 data-aos="fade-up">{{ title }}</h2>
      <slot></slot>
    </div>
  </section>
</template>

<style lang="scss" module>
section {
  h2 {
    @apply font-bold text-4xl text-center pb-4;
  }

  &__text {
    @apply text-center px-6 text-lg;
    max-width: 20rem;
  }
}
</style>
