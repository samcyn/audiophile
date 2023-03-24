<script setup lang="ts">
// layouts
import AppHeroComponentVue from '../components/home-page/AppHeroComponent.vue';

// cards
import AppProductCard2 from '../components/home-page/AppProductCard2.vue';
import AppProductCard3 from '../components/home-page/AppProductCard3.vue';
import AppCardWithOverlay from '../components/shared/cards/AppCardWithOverlay.vue';
import AppCardWithActionButton from '../components/shared/cards/AppCardWithActionButton.vue';

// modules
import AppAudioGearModule from '../modules/AppAudioGearModule.vue';
import AppCategoryModule from '../modules/AppCategoryModule.vue';
// grids
import AppGrid from '../components/shared/AppGrid.vue';
import AppCol from '../components/shared/AppCol.vue';
</script>

<template>
  <app-hero-component-vue
    class="mb-10 md:mb-24 lg:mb-30"
  />
  <app-category-module
    class="mb-30 md:mb-24 lg:mb-42"
  />
  <!-- products cards -->
  <section class="container">
    <app-product-card2
      class="mb-6 md:mb-8 lg:mb-12"
    />
    <app-product-card3
      class="mb-6 md:mb-8 lg:mb-12"
    />
  </section>

  <section
    class="container mb-30 md:mb-24 xl:mb-50"
  >
    <!-- grid system -->
    <app-grid class="-mx-5px lg:-mx-15px">
      <app-col
        class="px-5px lg:px-15px md:basis-1/2"
      >
        <app-card-with-overlay
          class="mb-6 md:mb-0 h-50 md:h-80"
        />
      </app-col>
      <app-col
        class="px-5px lg:px-15px md:basis-1/2"
      >
        <app-card-with-action-button />
      </app-col>
    </app-grid>
  </section>
  <!-- audio gear module -->
  <app-audio-gear-module
    class="mb-30 md:mb-24 xl:mb-50"
  />
</template>

<style scoped></style>
