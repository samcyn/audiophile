<script setup lang="ts">
import AppCardWithTextDescription from '../components/shared/cards/AppCardWithTextDescription.vue';
import AppCardWithImageCentered from '../components/shared/cards/AppCardWithImageCentered.vue';

// images
import ImageBestGear from '/src/assets/shared/mobile/image-xx99-mark-two-headphones.jpg';
import ImageBestGearDesktop from '/src/assets/shared/tablet/image-xx99-mark-two-headphones.jpg';
import ImageBestGearTablet from '/src/assets/shared/desktop/image-xx99-mark-two-headphones.jpg';

interface AppTwoColumnModuleProps {
  reverse?: boolean;
  imageMobile?: string;
  imageTablet?: string;
  imageDesktop?: string;
  title?: string;
  subTitle?: string;
  description?: string;
  buttonText?: string;
}
withDefaults(
  defineProps<AppTwoColumnModuleProps>(),
  {
    reverse: false,
    imageMobile: ImageBestGear,
    imageTablet: ImageBestGearDesktop,
    imageDesktop: ImageBestGearTablet,
    title: '',
    subTitle: '',
    description: '',
    buttonText: '',
  }
);
const onActionButtonClick = (ev: Event) => {
  console.log(ev, 12233);
};
</script>
<template>
  <section class="container">
    <div
      :class="`flex flex-col lg:flex-row lg:gap-[125px] lg:items-center ${
        reverse
          ? 'lg:flex-row-reverse'
          : 'lg:flex-row'
      }`"
    >
      <app-card-with-image-centered
        class="w-full md:mb-[52px] lg:mb-0 lg:w-[540px]"
        :image-mobile="imageMobile"
        :image-tablet="imageTablet"
        :image-desktop="imageDesktop"
      />
      <app-card-with-text-description
        class="w-full md:w-[563px] md:mx-auto lg:w-[445px]"
        :sub-title="subTitle"
        :title="title"
        :description="description"
        :button-text="buttonText"
        @on-action-button-click="
          onActionButtonClick
        "
      />
    </div>
  </section>
</template>
