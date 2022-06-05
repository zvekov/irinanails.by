<script setup>
const config = useRuntimeConfig().public
import {computed} from 'vue'
const {
  data: phone
} = await useLazyFetch(`${config.airtableEndpointUrl}/app1lBv7h0eWAJ4uO/Настройки?&fields%5B%5D=phone&maxRecords=1&view=Grid%20view&filterByFormula={Сайт}="irinanails.by"`, {
  headers: {Authorization: `Bearer ${config.airtableApiKey}`},
})
const computedPhone = computed(() => phone.value.records[0].fields.phone)
const formattedPhone = computedPhone.value.replace(
    /[`~!@#$%^&*()_|\-=?;:'",.<>\{\}\[\]\\\/, " "]/g,
    ''
)
</script>

<template>
  <a :href="`tel:${formattedPhone}`">{{computedPhone}}</a>
</template>
