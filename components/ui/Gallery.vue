<template>
  <div :id="galleryID" :class="$style.gallery">
    <a
        v-for="(image, index) in imagesData"
        :key="index"
        :href="image.thumbnails.full.url"
        :data-pswp-width="image.thumbnails.full.width"
        :data-pswp-height="image.thumbnails.full.height"
        target="_blank"
        rel="noreferrer"
        data-aos="fade-up"
        :data-aos-delay="lg ? `${index+1}00` : 0"
    >
      <div :class="$style.gallery__image">
        <nuxt-picture
            :src="image.thumbnails.large.url"
            sizes="xs:100vw sm:100vw md:50vw"
            format="webp"
            loading="lazy"
            provider="vercel"
            :img-attrs="{
              placeholder: image.thumbnails.small.url,
              height: image.thumbnails.large.height,
              width: image.thumbnails.large.width,
              alt: ''
            }"/>
      </div>
    </a>
  </div>
</template>

<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export default {
  name: 'SimpleGallery',
  props: {
    galleryID: String,
    images: Array,
  },
  setup(props) {
    const breakpoints = useBreakpoints(breakpointsTailwind)
    const lg = breakpoints.isGreater('lg')
    return {
      breakpoints,
      lg,
      imagesData: props.images,
    };
  },
  mounted() {
    if (!this.lightbox) {
      this.lightbox = new PhotoSwipeLightbox({
        gallery: '#' + this.$props.galleryID,
        children: 'a',
        counter: false,
        closeTitle: 'Закрыть',
        zoomTitle: 'Увеличить',
        arrowPrevTitle: 'Предыдущая работа',
        arrowNextTitle: 'Следующая работа',
        errorMsg: 'Ошибка при загрузке',
        indexIndicatorSep: ' из ',
        pswpModule: () => import('photoswipe'),
      });
      this.lightbox.init();
    }
  },
  unmounted() {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }
  },
  methods: {},
};
</script>

<style module lang="scss">
.gallery {
  &__image {
    @apply w-[20rem] h-[20rem] cursor-zoom-in;

    & img {
      @apply w-full h-full object-cover object-center rounded-lg;
      filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.15))
    }
  }
}
</style>
