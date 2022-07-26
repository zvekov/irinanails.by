<script lang="ts" setup>
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
    <a v-if="isExternal" :class="`btn__${type}`" :href="href" :target="target">
      <slot/>
    </a>
    <nuxt-link v-else :to="href">
      <slot/>
    </nuxt-link>
</template>

