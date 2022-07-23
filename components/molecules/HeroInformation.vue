<script setup>
import {marked} from "marked";
import {ContentLoader} from 'vue-content-loader'

defineProps({
  workTime: {
    type: String,
    default: ''
  },
  address: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
  }
})
</script>

<template>
  <ul :class="$style.heroInformation">
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 36 36">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width=".75"
              d="m20.14 14.072-.582-7.01a.75.75 0 0 0-.75-.687H17.19a.75.75 0 0 0-.75.688l-.581 7.01"/>
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width=".75"
              d="M12.764 16.44c-.083-.443.026-.9.3-1.258 1.2-1.666 8.672-1.682 9.872 0 .274.358.383.815.3 1.258l-1.607 6a1.5 1.5 0 0 1-1.467 1.185h-4.324a1.5 1.5 0 0 1-1.467-1.185l-1.607-6Z"
              clip-rule="evenodd"/>
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width=".75"
              d="M19.92 21.053a.375.375 0 0 1-.37.322h-3.1a.375.375 0 0 1-.37-.322l-.644-4.5a.375.375 0 0 1 .372-.428h4.385a.375.375 0 0 1 .375.428l-.647 4.5Z"
              clip-rule="evenodd"/>
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              d="M18 .861a17.07 17.07 0 0 1 9.168 2.655c7.125 4.517 7.65 13.845 1.972 20.666a88.95 88.95 0 0 1-10.659 10.782.75.75 0 0 1-.963 0A88.999 88.999 0 0 1 6.86 24.18C1.183 17.361 1.707 8.032 8.832 3.516A17.07 17.07 0 0 1 18 .861Z"
              clip-rule="evenodd"/>
      </svg>
      <Suspense>
        <template v-if="loading">
          <ContentLoader viewBox="0 0 252 56" :speed="2" style="width: 252px;">
            <rect x="0" y="5" rx="8" ry="8" width="252" height="18"/>
            <rect x="0" y="35" rx="8" ry="8" width="252" height="18"/>
          </ContentLoader>
        </template>
        <template v-else>
          <span v-html="marked(address)"/>
        </template>
      </Suspense>
    </li>
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 36 36">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              d="M17.998 35.252c9.527 0 17.25-7.724 17.25-17.25 0-9.527-7.723-17.25-17.25-17.25C8.473.752.748 8.475.748 18.002c0 9.526 7.724 17.25 17.25 17.25Z"
              clip-rule="evenodd"/>
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18 9.752v8.25l9 8.25"/>
      </svg>
      <Suspense>
        <template v-if="loading">
          <ContentLoader viewBox="0 0 252 56" :speed="2" style="width: 252px;">
            <rect x="0" y="5" rx="8" ry="8" width="252" height="18"/>
            <rect x="0" y="35" rx="8" ry="8" width="252" height="18"/>
          </ContentLoader>
        </template>
        <template v-else>
          <span v-html="marked(workTime)"/>
        </template>
      </Suspense>
    </li>
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              d="M9.99 13.35a2.667 2.667 0 0 0 0-3.771L7.16 6.75a2.667 2.667 0 0 0-3.77 0L1.837 8.303a4 4 0 0 0-.504 5.03 62.001 62.001 0 0 0 17.334 17.334 4 4 0 0 0 5.03-.506l1.554-1.552a2.667 2.667 0 0 0 0-3.77l-2.83-2.828a2.667 2.667 0 0 0-3.77 0l-.943.942a63.225 63.225 0 0 1-8.666-8.666l.947-.936Z"
              clip-rule="evenodd"/>
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              d="M16 .667C24.468.667 31.333 7.532 31.333 16"/>
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              d="M16 6c5.523 0 10 4.477 10 10m-10-4.667A4.667 4.667 0 0 1 20.667 16"/>
      </svg>

      <Suspense>
        <template v-if="loading">
          <ContentLoader viewBox="0 0 252 32" :speed="2" style="width: 252px;">
            <rect x="4" y="8" rx="8" ry="8" width="248" height="18"/>
          </ContentLoader>
        </template>
        <template v-else>
        <atoms-phone :phone="phone"/>
        </template>
      </Suspense>
    </li>
  </ul>
</template>

<style lang="scss" module>
.heroInformation {
  @apply flex flex-col gap-4;
  & li {
    @apply flex items-center gap-4 text-lg;
  }
}
</style>
