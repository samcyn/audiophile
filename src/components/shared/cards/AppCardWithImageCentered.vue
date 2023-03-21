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
    class="card bg-grey-100 rounded-lg overflow-hidden flex justify-center"
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
.card__image {
  max-height: 100%;
}
</style>
