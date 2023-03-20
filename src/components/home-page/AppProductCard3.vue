<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import AppButton from '../shared/AppButton.vue';
import AppImage from '../shared/AppImage.vue';

import ImageSpeakerMobile from '../../assets/home/mobile/image-speaker-zx7.jpg';
import ImageSpeakerTablet from '../../assets/home/tablet/image-speaker-zx7.jpg';
import ImageSpeakerDesktop from '../../assets/home/desktop/image-speaker-zx7.jpg';
// define components models
interface AppCardProps {
  title?: string;
  description?: string;
  image?: string;
}

// set defaults props
withDefaults(defineProps<AppCardProps>(), {
  title: 'ZX7 SPEAKER',
  description: `Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.`,
  image: ImageSpeakerMobile,
});
</script>
<template>
  <div
    class="card bg-grey-100/5 relative rounded-lg overflow-hidden"
  >
    <figure class="card__figure w-full absolute">
      <app-image
        :src="image"
        class="card__image h-full w-full md:hidden"
        alt="product image"
      />
      <app-image
        :src="ImageSpeakerTablet"
        class="card__image h-full w-full hidden md:inline xl:hidden"
        alt="product image"
      />
      <app-image
        :src="ImageSpeakerDesktop"
        class="card__image h-full w-full hidden xl:inline"
        alt="product image"
      />
    </figure>
    <div class="card__body relative">
      <h3
        v-html="title"
        class="card__title font-bold uppercase mb-8"
      ></h3>
      <app-button
        variant="outlined"
        button-type="secondary"
        >SEE PRODUCT</app-button
      >
    </div>
  </div>
</template>
<style scoped>
.card {
  padding: 101px 24px;
}
.card__title {
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
}
.card__figure {
  height: 320px;
  top: 0;
  right: 0;
}
.card__image {
  max-width: none;
}

@media (min-width: 768px) {
  .card {
    padding: 101px 62px;
  }
  .card__figure {
    height: 320px;
  }
}
@media (min-width: 1440px) {
  .card {
    padding: 101px 95px;
  }
  .card__figure {
    height: 320px;
  }
}
</style>
