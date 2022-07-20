<script setup>
defineProps({
  phone: {
    type: String,
    default: ''
  }
})

function formattedPhone(phone) {
  return phone.replace(
      /[`~!@#$%^&*()_|\-=?;:'",.<>\{\}\[\]\\\/, " "]/g,
      '')
}
</script>

<template>
  <a :href="`tel:${formattedPhone(phone)}`">{{ phone }}</a>
</template>
