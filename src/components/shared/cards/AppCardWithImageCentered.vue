<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

import AppImage from '../AppImage.vue';

import ImageSpeakerMobile from '/src/assets/shared/mobile/image-xx99-mark-two-headphones.jpg';
import ImageSpeakerTablet from '/src/assets/home/tablet/image-earphones-yx1.jpg';
import ImageSpeakerDesktop from '/src/assets/home/desktop/image-earphones-yx1.jpg';

interface AppCardProps {
  imageMobile?: string;
  imageTablet?: string;
  imageDesktop?: string;
}

// set defaults props
withDefaults(defineProps<AppCardProps>(), {
  imageMobile: ImageSpeakerMobile,
  imageTablet: ImageSpeakerTablet,
  imageDesktop: ImageSpeakerDesktop,
});
</script>
<template>
  <div
    class="card bg-grey-100 rounded-lg overflow-hidden flex justify-center pt-10 xl:p-16 mb-8"
  >
    <figure class="card__figure">
      <slot name="image">
        <app-image
          :src="imageMobile"
          class="card__image md:hidden"
          alt="product image"
        />
        <app-image
          :src="imageTablet"
          class="card__image hidden md:inline xl:hidden"
          alt="product image"
        />
        <app-image
          :src="imageDesktop"
          class="card__image hidden xl:inline"
          alt="product image"
        />
      </slot>
    </figure>
  </div>
</template>
<style scoped>
.card {
  padding-bottom: 68px;
  padding-left: 42px;
  padding-right: 42px;
}

.card__image {
  height: 244px;
}
@media (min-width: 1024px) {
  .card__image {
    height: 386px;
  }
}
</style>
