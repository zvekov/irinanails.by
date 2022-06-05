<script setup>
defineProps({
  isExternal: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'default'
  },
  href: {
    type: String,
    default: null
  },
  target: {
    type: String,
    default: '_blank'
  }
})
</script>

<template>
  <a v-if="isExternal" :class="type" :href="href" :target="target">
    <slot />
  </a>
  <nuxt-link v-if="!isExternal" :class="type" :to="href">
    <slot />
  </nuxt-link>
</template>

<style>
.default {
  @apply flex justify-center py-4 text-lg rounded-lg font-bold text-white w-full;
  background: radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf);
  filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.25));
}
</style>
