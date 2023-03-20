<script setup lang="ts">
import AppImage from '../AppImage.vue';

import ImageSpeakerMobile from '/src/assets/home/mobile/image-earphones-yx1.jpg';
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
    class="card w-full bg-grey-100/5 relative rounded-lg overflow-hidden"
  >
    <figure class="card__figure w-full h-full">
      <slot>
        <app-image
          :src="imageMobile"
          class="card__image h-full w-full md:hidden"
          alt="product image"
        />
        <app-image
          :src="imageTablet"
          class="card__image h-full w-full hidden md:inline xl:hidden"
          alt="product image"
        />
        <app-image
          :src="imageDesktop"
          class="card__image h-full w-full hidden xl:inline"
          alt="product image"
        />
      </slot>
    </figure>
  </div>
</template>
<style scoped></style>
