<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import AppButton from '../shared/AppButton.vue';
import AppImage from '../shared/AppImage.vue';

import useNavigations from '../../hooks/useNavigations';

import ImageSpeakerMobile from '../../assets/home/mobile/image-speaker-zx9.png';
import PatternCircle from '../../assets/home/desktop/pattern-circles.svg';

// define components models
interface AppCardProps {
  slug: string;
  title?: string;
  description?: string;
  imageMobile?: string;
  imageTablet?: string;
  imageDesktop?: string;
}

// set defaults props
const props = withDefaults(
  defineProps<AppCardProps>(),
  {
    title: `ZX9 <br /> SPEAKER`,
    description: `Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.`,
    image: ImageSpeakerMobile,
    imageMobile: ImageSpeakerMobile,
    imageTablet: ImageSpeakerMobile,
    imageDesktop: ImageSpeakerMobile,
  }
);

const { pushToRoute } = useNavigations();

const onClick = () => {
  pushToRoute({
    name: 'speakers-detailed',
    params: { id: props.slug },
  });
};
</script>
<template>
  <div
    class="card bg-orange-100 rounded-lg relative overflow-hidden m-auto"
  >
    <div
      class="card__overlay absolute left-1/2 -translate-x-1/2 xl:translate-x-0"
    >
      <img
        :src="PatternCircle"
        alt="circles"
        class="w-full h-full"
      />
    </div>
    <div
      class="card__flexContent relative flex items-center flex-col xl:flex-row xl:items-start"
    >
      <figure
        class="card__figure mb-8 md:mb-16 m-auto xl:mb-0"
      >
        <app-image
          class="card__image md:hidden"
          :src="imageMobile"
          alt="image"
        />
        <app-image
          class="card__image hidden md:block lg:hidden"
          :src="imageTablet"
          alt="image"
        />
        <app-image
          class="card__image hidden md:hidden lg:block"
          :src="imageDesktop"
          alt="image"
        />
      </figure>
      <div
        class="card__textArea flex flex-col items-center xl:items-start xl:pt-10"
      >
        <p
          class="card__title text-white font-bold text-center uppercase mb-6 xl:text-left"
          v-html="title"
        ></p>
        <p
          class="card__description text-center text-white/75 font-medium mb-6 md:mb-10 xl:text-left"
          v-html="description"
        ></p>
        <app-button
          button-type="secondary"
          class="card__actionBtn"
          @click="onClick"
          >SEE PRODUCT</app-button
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  padding: 55px 24px;
}
.card__title {
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 1.28571px;
}
.card__description {
  font-size: 15px;
  line-height: 25px;
  mix-blend-mode: normal;
}
.card__image {
  height: 207px;
}
.card__overlay {
  width: 558px;
  height: 558px;
  z-index: 1;
  top: -120px;
}
.card__flexContent {
  z-index: 2;
}
@media (min-width: 768px) {
  .card {
    padding: 52px 24px 64px 24px;
  }
  .card__image {
    height: 237px;
  }
  .card__title {
    font-size: 56px;
    line-height: 58px;
    letter-spacing: 2px;
  }
  .card__overlay {
    width: 944px;
    height: 944px;
    top: -286px;
  }
  .card__textArea {
    max-width: 349px;
  }
}

@media (min-width: 1440px) {
  .card {
    padding: 94px 95px 0 116px;
  }
  .card__image {
    height: 493px;
  }
  .card__figure {
    position: relative;
    margin: 0 0 -27px;
  }
  .card__flexContent {
    gap: 140px;
  }
  .card__overlay {
    top: -36px;
    left: -149px;
  }
  /* .card__actionBtn {
    background: #4c4c4c;
  } */
}
</style>
