<template>
  <div :id="galleryID" :class="$style.gallery">
    <a
        v-for="(image, key) in imagesData"
        :key="key"
        :href="image.thumbnails.full.url"
        :data-pswp-width="image.thumbnails.full.width"
        :data-pswp-height="image.thumbnails.full.height"
        target="_blank"
        rel="noreferrer"


    >
      <div :class="$style.gallery__image">
        <img :src="image.thumbnails.large.url" alt="" loading="lazy"/>
      </div>
    </a>
  </div>
</template>

<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default {
  name: 'SimpleGallery',
  props: {
    galleryID: String,
    images: Array,
  },
  setup(props) {
    return {
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
        zoomTitle: 'Увелиичить',
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
