<script setup lang="ts">
// layouts
import AppNavigationBarVue from '../components/layout/AppNavigationBar.vue';
import AppFooterVue from '../components/layout/AppFooter.vue';
import AppHeroComponentVue from '../components/home-page/AppHeroComponent.vue';

// cards
import AppProductCard2 from '../components/home-page/AppProductCard2.vue';
import AppProductCard3 from '../components/home-page/AppProductCard3.vue';
import AppCardWithOverlay from '../components/shared/cards/AppCardWithOverlay.vue';
import AppCardWithActionButton from '../components/shared/cards/AppCardWithActionButton.vue';
import AppCardWithTextDescription from '../components/shared/cards/AppCardWithTextDescription.vue';
import AppCardWithFloatingImage from '../components/shared/cards/AppCardWithFloatingImage.vue';

// grids
import AppGrid from '../components/shared/AppGrid.vue';
import AppCol from '../components/shared/AppCol.vue';

// uis
import ImageProduct from '/src/assets/product-xx99-mark-one-headphones/mobile/image-product.svg';
import ImageSpeakerMobile from '/src/assets/home/mobile/image-speaker-zx9.png';
import ImageEarPhone from '/src/assets/product-yx1-earphones/mobile/image-product.jpg';
import ImageBestGear from '/src/assets/shared/mobile/image-best-gear.jpg';
import ImageBestGearDesktop from '/src/assets/shared/desktop/image-best-gear.jpg';
import ImageBestGearTablet from '/src/assets/shared/tablet/image-best-gear.jpg';
</script>

<template>
  <app-navigation-bar-vue />
  <app-hero-component-vue />
  <section
    class="container pt-10 md:pt-24 lg:pt-[120px] pb-[120px] md:pb-24 lg:pb-[168px]"
  >
    <!-- grid system -->
    <app-grid class="-my-2">
      <app-col class="py-2 md:basis-4/12">
        <app-card-with-floating-image
          :image="ImageProduct"
        />
      </app-col>
      <app-col class="py-2 md:basis-4/12">
        <app-card-with-floating-image
          :image="ImageSpeakerMobile"
        />
      </app-col>
      <app-col class="py-2 md:basis-4/12">
        <app-card-with-floating-image
          :image="ImageEarPhone"
        />
      </app-col>
    </app-grid>
  </section>
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
    class="container pb-[120px] md:pb-24 xl:pb-[200px]"
  >
    <!-- grid system -->
    <app-grid>
      <app-col class="md:basis-1/2">
        <app-card-with-overlay
          class="mb-6 md:mb-0 h-[200px] md:h-80"
        />
      </app-col>
      <app-col class="md:basis-1/2">
        <app-card-with-action-button />
      </app-col>
    </app-grid>
  </section>
  <!-- use two column component -->
  <section
    class="container pb-[120px] md:pb-24 xl:pb-[200px]"
  >
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
  <app-footer-vue />
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
