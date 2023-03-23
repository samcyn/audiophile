<script setup lang="ts">
import AppMiniHero from '../components/shared/AppMiniHero.vue';

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
    class="mb-[120px] lg:mb-40"
    flex-container-class="flex-col lg:flex-row lg:gap-[125px] lg:items-center"
    sub-title="see product"
    title="XX99 Mark II Headphones"
    button-text="see product"
  />

  <!-- two column module -->
  <app-two-column-module
    class="mb-[120px] lg:mb-40"
    flex-container-class="flex-col lg:flex-row lg:gap-[125px] lg:items-center"
    card-with-image-centered="lg:w-[540px]"
    card-with-text-extra-class="md:w-[563px] lg:w-[445px]"
    title="XX99 Mark I Headphones"
    button-text="see product"
    reverse
  />

  <app-two-column-module
    class="mb-[120px] lg:mb-40"
    flex-container-class="flex-col lg:flex-row lg:gap-[125px] lg:items-center"
    card-with-image-centered="lg:w-[540px]"
    card-with-text-extra-class="md:w-[563px] lg:w-[445px]"
    title="XX99 Mark I Headphones"
    button-text="see product"
  />

  <app-category-module
    class="mb-[120px] xl:mb-40"
  />

  <app-audio-gear-module
    class="mb-[120px] xl:mb-40"
  />
</template>
