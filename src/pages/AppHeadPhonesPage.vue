<script setup lang="ts">
import AppMiniHero from '../components/shared/AppMiniHero.vue';
import AppButton from '../components/shared/AppButton.vue';

// modules
import AppTwoColumnModule from '../modules/AppTwoColumnModule.vue';
import AppAudioGearModule from '../modules/AppAudioGearModule.vue';
import AppCategoryModule from '../modules/AppCategoryModule.vue';
</script>
<template>
  <app-mini-hero
    title="HEADPHONES"
    class="mb-16 md:mb-[120px] lg:mb-40"
  />

  <!-- two column module -->
  <app-two-column-module
    class="mb-[120px] md:mb-[120px] lg:mb-40"
    flex-container-class="flex-col lg:flex-row lg:gap-14 xl:gap-[125px] lg:items-center"
    card-with-image-centered="
      pb-[68px] pl-[42px] pr-[42px] pt-10 xl:p-16 
      h-[352px] mb-8 md:mb-[52px] lg:mb-0 lg:w-[460px]  xl:w-[540px] lg:h-[560px]
    "
    card-with-text-extra-class="lg:max-w-[420px] xl:max-w-[445px]"
  >
    <template #subTitle>
      <p
        class="cardSubTitle text-[14px] leading-[19px] tracking-[10px] text-center font-normal uppercase text-orange-100 mb-6 md:mb-4 lg:text-left lg:text-[14px] lg:leading-[19px]"
      >
        New Product
      </p>
    </template>
    <template #title>
      <p
        class="cardTitle font-bold text-[28px] leading-[38px] tracking-[1px] text-center uppercase text-black-100 mb-6 md:mb-8 md:text-[40px] md:leading-[44px] md:tracking-[1.42857px] md:max-w-lg md:mx-auto lg:text-left"
      >
        XX99 Mark II Headphones
      </p>
    </template>
    <template #description>
      <slot name="description">
        <div
          class="cardDescription font-medium text-[15px] leading-[25px] text-center text-black-100/50 md:max-w-[572px] md:m-auto lg:text-left"
        >
          The new XX99 Mark II headphones is the
          pinnacle of pristine audio. It redefines
          your premium headphone experience by
          reproducing the balanced depth and
          precision of studio-quality sound.
        </div>
      </slot>
    </template>
    <template #buttonText>
      <div
        class="flex justify-center lg:justify-start mt-6 xl:mt-10"
      >
        <app-button>See product</app-button>
      </div>
    </template>
  </app-two-column-module>

  <!-- two column module -->
  <!-- <app-two-column-module
    class="mb-[120px] lg:mb-40"
    flex-container-class="flex-col lg:flex-row lg:gap-[125px] lg:items-center"
    card-with-image-centered="lg:w-[540px]"
    card-with-text-extra-class="md:w-[563px] lg:w-[445px]"
    title="XX99 Mark I Headphones"
    button-text="see product"
    reverse
  /> -->

  <!-- <app-two-column-module
    class="mb-[120px] lg:mb-40"
    flex-container-class="flex-col lg:flex-row lg:gap-[125px] lg:items-center"
    card-with-image-centered="lg:w-[540px]"
    card-with-text-extra-class="md:w-[563px] lg:w-[445px]"
    title="XX99 Mark I Headphones"
    button-text="see product"
  /> -->

  <app-category-module
    class="mb-[120px] xl:mb-40"
  />

  <app-audio-gear-module
    class="mb-[120px] xl:mb-40"
  />
</template>
