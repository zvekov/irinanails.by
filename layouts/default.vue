<script setup lang="ts">
import {onMounted} from 'vue'
import AOS from "aos";

import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    disable: function () {
      return /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
    }
  });
})
</script>

<template>
  <div :class="$style.default">
    <div :class="$style.default_content">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss" module>
.default {
  @apply font-body min-h-screen flex flex-col;

  &_content {
    @apply grow block;
  }
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
