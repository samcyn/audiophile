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
  <section class="mb-[120px] lg:mb-40">
    <div class="container">
      <app-grid class="-my-2 md:-mx-2.5">
        <app-col
          class="py-2 md:px-2.5 md:basis-5/12"
        >
          <app-grid class="-my-2 md:-my-2.5">
            <app-col
              class="py-2 md:py-2.5 md:basis-full"
            >
              <app-card-with-overlay
                class="h-[174px]"
                :image-mobile="imageMobile"
                :image-tablet="imageTablet"
                :image-desktop="imageDesktop"
              />
            </app-col>
            <app-col
              class="py-2 md:py-2.5 md:basis-full"
            >
              <app-card-with-overlay
                class="h-[174px]"
                :image-mobile="imageMobile"
                :image-tablet="imageTablet"
                :image-desktop="imageDesktop"
              />
            </app-col>
          </app-grid>
        </app-col>
        <app-col
          class="py-2 md:px-2.5 md:basis-7/12"
        >
          <app-card-with-overlay
            class="h-[368px]"
            :image-mobile="imageMobile"
            :image-tablet="imageTablet"
            :image-desktop="imageDesktop"
          />
        </app-col>
      </app-grid>
    </div>
  </section>
</template>
