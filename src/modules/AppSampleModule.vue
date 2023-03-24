<script setup lang="ts">
import AppCardWithOverlay from '../components/shared/cards/AppCardWithOverlay.vue';

// grids
import AppGrid from '../components/shared/AppGrid.vue';
import AppCol from '../components/shared/AppCol.vue';

// images
import ImageBestGear from '/src/assets/shared/mobile/image-best-gear.jpg';
import ImageBestGearDesktop from '/src/assets/shared/desktop/image-best-gear.jpg';
import ImageBestGearTablet from '/src/assets/shared/tablet/image-best-gear.jpg';
interface Props {
  imageMobile?: string;
  imageTablet?: string;
  imageDesktop?: string;
}
withDefaults(defineProps<Props>(), {
  imageMobile: ImageBestGear,
  imageTablet: ImageBestGearDesktop,
  imageDesktop: ImageBestGearTablet,
});
</script>
<template>
  <section class="mb-30 lg:mb-40">
    <div class="container">
      <app-grid
        class="-mx-5px -my-2 md:my-0 md:-mx-9px lg:-mx-15px"
      >
        <app-col
          class="px-5px py-2 md:py-0 md:px-9px md:basis-5/12 lg:px-15px"
        >
          <app-grid
            class="-mx-5px -my-2 md:-my-2.5 lg:-my-4"
          >
            <app-col
              class="px-5px py-2 md:py-2.5 md:basis-full lg:py-4"
            >
              <app-card-with-overlay
                class="h-174px lg:h-70"
                :image-mobile="imageMobile"
                :image-tablet="imageTablet"
                :image-desktop="imageDesktop"
              />
            </app-col>
            <app-col
              class="px-5px py-2 md:py-2.5 md:basis-full lg:py-4"
            >
              <app-card-with-overlay
                class="h-174px lg:h-70"
                :image-mobile="imageMobile"
                :image-tablet="imageTablet"
                :image-desktop="imageDesktop"
              />
            </app-col>
          </app-grid>
        </app-col>
        <app-col
          class="px-5px py-2 md:py-0 md:px-9px md:basis-7/12 lg:px-15px"
        >
          <app-card-with-overlay
            class="h-92 lg:h-148"
            :image-mobile="imageMobile"
            :image-tablet="imageTablet"
            :image-desktop="imageDesktop"
          />
        </app-col>
      </app-grid>
    </div>
  </section>
</template>
