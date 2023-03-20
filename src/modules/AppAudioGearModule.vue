<script setup lang="ts">
import AppCardWithOverlay from '../components/shared/cards/AppCardWithOverlay.vue';
import AppCardWithTextDescription from '../components/shared/cards/AppCardWithTextDescription.vue';

// grids
import AppGrid from '../components/shared/AppGrid.vue';
import AppCol from '../components/shared/AppCol.vue';

import ImageBestGear from '/src/assets/shared/mobile/image-best-gear.jpg';
import ImageBestGearDesktop from '/src/assets/shared/desktop/image-best-gear.jpg';
import ImageBestGearTablet from '/src/assets/shared/tablet/image-best-gear.jpg';
</script>
<template>
  <section class="container">
    <app-grid class="lg:flex-row-reverse">
      <app-col class="lg:basis-1/2">
        <app-card-with-overlay
          class="mb-9 md:mb-[63px] lg:mb-0 h-[300px] lg:h-[400px] xl:h-[588px]"
          :image-mobile="ImageBestGear"
          :image-tablet="ImageBestGearTablet"
          :image-desktop="ImageBestGearDesktop"
        />
      </app-col>
      <app-col
        class="flex items-center lg:basis-1/2"
      >
        <app-card-with-text-description
          class="xl:max-w-[445px]"
        >
          <template #title>
            <h3
              class="card__title font-bold text-center uppercase text-black-100 mb-9 md:mb-8 lg:text-left"
            >
              Bringing you the <br />
              <span class="text-orange-100"
                >best</span
              >
              audio gear
            </h3>
          </template>
          <template #description>
            <div
              class="card__description font-medium text-center text-black-100/50 lg:text-left lg:max-w-none"
            >
              Located at the heart of New York
              City, Audiophile is the premier
              store for high end headphones,
              earphones, speakers, and audio
              accessories. We have a large
              showroom and luxury demonstration
              rooms available for you to browse
              and experience a wide range of our
              products. Stop by our store to meet
              some of the fantastic people who
              make Audiophile the best place to
              buy your portable audio equipment.
            </div>
          </template>
        </app-card-with-text-description>
      </app-col>
    </app-grid>
  </section>
</template>
<style scoped>
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
  .card__description {
    max-width: 573px;
  }
}
</style>
