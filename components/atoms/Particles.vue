<script setup>
import { loadFull } from "tsparticles";

const particlesInit = async (engine) => {
  await loadFull(engine);
}

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
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
      // onHover: {
      //   enable: true,
      //   mode: 'repulse'
      // },
      resize: true
    },
    modes: {
      bubble: {
        distance: 400,
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
    color: {
      value: ['#FD98CF', '#E74249', '#F8C5A1'],
      random: true
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.15,
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
      straight: false
    },
    number: {
      density: {
        enable: true,
        value_area: 800
      },
      value: 100
    },
    opacity: {
      value: 0.15
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
  <div>
    <Particles
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
        id="tsparticles"
        class="w-full h-full"
        :options="options"
    />
  </div>
</template>
