<script setup>
import { loadFull } from "tsparticles";

const particlesInit = async (engine) => {
  await loadFull(engine);
}

const particlesLoaded = async (container) => {
 // console.log("Particles container loaded", container);
}
import {onMounted, ref} from "vue";

const options = {
  background: {
    color: {
      value: '#ffffff'
    }
  },
  fpsLimit: 30,
  interactivity: {
    detectsOn: 'window',
    events: {
      // onClick: {
      //   enable: true,
      //   mode: 'push'
      // },
      onHover: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 100,
        duration: 2,
        opacity: 0.8,
        size: 40,
        speed: 0.5
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    fullScreen: {
      enable: false,
      zIndex: 0
    },
    color: {
      value: ['#efe6e6', '#fde6e6', '#FEF0EB'],
      // value: '#FEF0EB',
      random: true
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.9,
      width: 10
    },
    collisions: {
      enable: true
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: true,
      speed: 0.5,
      straight: true
    },
    number: {
      density: {
        enable: true,
        value_area: 800
      },
      value: 100
    },
    opacity: {
      value: 0.7
    },
    shape: {
      type: 'circle'
    },
    size: {
      random: true,
      value: 10
    }
  },
  detectRetina: true
}
const pageReady = ref(false)
onMounted(() => {
  pageReady.value = true
})
</script>

<template>
  <div :class="$style.particles">
    <Particles
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
        id="hero__particles"
        :options="options"
    />
  </div>
</template>

<style lang="scss" module>
.particles {

}
</style>
