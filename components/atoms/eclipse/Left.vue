<script setup>
const initial = ref({
  y: 100,
  opacity: 0,
})

const enter = ref({
  y: 0,
  opacity: 1,
})
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="123" fill="none" viewBox="0 0 44 123">
    <circle cx="11" cy="11" r="11" fill="#FD98CF" fill-opacity=".44"/>
    <circle cx="40" cy="59" r="4" fill="#E74249" fill-opacity=".46"/>
    <circle cx="21.5" cy="114.5" r="8.5" fill="#F8C5A1"/>
  </svg>
</template>
