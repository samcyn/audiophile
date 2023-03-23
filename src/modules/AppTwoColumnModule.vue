<script setup lang="ts">
import {
  defineProps,
  withDefaults,
  Events,
} from 'vue';

import AppCardWithTextDescription from '../components/shared/cards/AppCardWithTextDescription.vue';
import AppCardWithImageCentered from '../components/shared/cards/AppCardWithImageCentered.vue';
import AppButton from '../components/shared/AppButton.vue';

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
  cardWithTextExtraClass?: string;
  cardWithImageCentered?: string;
  flexContainerClass?: string;
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
    cardWithTextExtraClass: '',
    cardWithImageCentered: '',
    flexContainerClass: '',
  }
);
const emit = defineEmits(['onActionButtonClick']);

const onClick = (event: Events['onClick']) => {
  emit('onActionButtonClick', event);
};
</script>
<template>
  <section class="container">
    <div class="flex" :class="flexContainerClass">
      <app-card-with-image-centered
        class="w-full"
        :class="cardWithImageCentered"
        :image-mobile="imageMobile"
        :image-tablet="imageTablet"
        :image-desktop="imageDesktop"
      />
      <app-card-with-text-description
        class="w-full"
        :class="cardWithTextExtraClass"
        :sub-title="subTitle"
        :title="title"
        :description="description"
        :button-text="buttonText"
      >
        <template #subTitle>
          <slot name="subTitle">
            <p
              v-if="subTitle"
              class="card__subtitle font-normal uppercase text-orange-100 mb-4 lg:text-left"
            >
              {{ subTitle }}
            </p>
          </slot>
        </template>
        <template #title>
          <slot name="title">
            <p
              v-if="title"
              class="card__title font-bold uppercase text-black-100 mb-6 md:mb-8 lg:text-left"
            >
              {{ title }}
            </p>
          </slot>
        </template>
        <template #description>
          <slot name="description">
            <div
              v-if="description"
              class="card__description font-medium text-black-100/50 lg:text-left"
            >
              {{ description }}
            </div>
          </slot>
        </template>
        <template #buttonText>
          <slot name="buttonText">
            <div
              v-if="buttonText"
              class="flex justify-center items-center lg:justify-start"
            >
              <app-button
                variant="contained"
                @click="onClick"
              >
                {{ buttonText }}
              </app-button>
            </div>
          </slot>
        </template>
        <template #default>
          <slot name="extraContent"></slot>
        </template>
      </app-card-with-text-description>
    </div>
  </section>
</template>
<style scoped>
.card__subtitle {
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 10px;
}
.card__title {
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
}
.card__description {
  font-size: 15px;
  line-height: 25px;
  mix-blend-mode: normal;
}

@media (min-width: 768px) {
  .card__title {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.42857px;
  }
}
</style>
