<script setup lang="ts">
import AppCardWithTextDescription from '../components/shared/cards/AppCardWithTextDescription.vue';
import AppCardWithImageCentered from '../components/shared/cards/AppCardWithImageCentered.vue';

import AppButton from '../components/shared/AppButton.vue';

// grids
import AppGrid from '../components/shared/AppGrid.vue';
import AppCol from '../components/shared/AppCol.vue';

// images
import ImageBestGear from '/src/assets/shared/mobile/image-xx99-mark-two-headphones.jpg';
import ImageBestGearDesktop from '/src/assets/shared/tablet/image-xx99-mark-two-headphones.jpg';
import ImageBestGearTablet from '/src/assets/shared/desktop/image-xx99-mark-two-headphones.jpg';

interface AppYouMayAlsoLikeModuleProps {
  imageMobile?: string;
  imageTablet?: string;
  imageDesktop?: string;
  title?: string;
  buttonText?: string;
}
withDefaults(
  defineProps<AppYouMayAlsoLikeModuleProps>(),
  {
    imageMobile: ImageBestGear,
    imageTablet: ImageBestGearDesktop,
    imageDesktop: ImageBestGearTablet,
    title: 'ZX7 SPEAKER',
    buttonText: 'SEE PRODUCT',
  }
);
const onActionButtonClick = (ev: Event) => {
  console.log(ev, 12233);
};
</script>
<template>
  <section class="mb-[120px] lg:mb-40">
    <div class="container">
      <app-grid class="-mx-[5px] lg:-mx-[15px]">
        <app-col
          class="px-[5px] md:basis-4/12 md:w-4/12 lg:px-[15px]"
        >
          <div class="mb-14 md:mb-0">
            <app-card-with-image-centered
              class="py-3 h-[120px] md:h-[318px]"
              :image-mobile="imageMobile"
              :image-tablet="imageTablet"
              :image-desktop="imageDesktop"
            />
            <app-card-with-text-description
              class="w-full"
              :button-text="buttonText"
              @on-action-button-click="
                onActionButtonClick
              "
            >
              <template #title>
                <p
                  class="card__title font-bold uppercase text-black-100 text-center mt-8 mb-8 lg:mt-10 lg:text-center"
                >
                  {{ title }}
                </p>
              </template>
              <template #buttonText>
                <div
                  class="flex justify-center items-center"
                >
                  <app-button variant="contained">
                    {{ buttonText }}
                  </app-button>
                </div>
              </template>
            </app-card-with-text-description>
          </div>
        </app-col>
        <app-col
          class="px-[5px] md:basis-4/12 md:w-4/12 lg:px-[15px]"
        >
          <div class="mb-14 md:mb-0">
            <app-card-with-image-centered
              class="py-3 h-[120px] md:h-[318px]"
              :image-mobile="imageMobile"
              :image-tablet="imageTablet"
              :image-desktop="imageDesktop"
            />
            <app-card-with-text-description
              class="w-full"
              :button-text="buttonText"
              @on-action-button-click="
                onActionButtonClick
              "
            >
              <template #title>
                <p
                  class="card__title font-bold uppercase text-black-100 text-center mt-8 mb-8 lg:mt-10 lg:text-center"
                >
                  {{ title }}
                </p>
              </template>
              <template #buttonText>
                <div
                  class="flex justify-center items-center"
                >
                  <app-button variant="contained">
                    {{ buttonText }}
                  </app-button>
                </div>
              </template>
            </app-card-with-text-description>
          </div>
        </app-col>
        <app-col
          class="px-[5px] md:basis-4/12 md:w-4/12 lg:px-[15px]"
        >
          <!-- last item margin bottom is zero -->
          <div>
            <app-card-with-image-centered
              class="py-3 h-[120px] md:h-[318px]"
              :image-mobile="imageMobile"
              :image-tablet="imageTablet"
              :image-desktop="imageDesktop"
            />
            <app-card-with-text-description
              class="w-full"
              :button-text="buttonText"
              @on-action-button-click="
                onActionButtonClick
              "
            >
              <template #title>
                <p
                  class="card__title font-bold uppercase text-black-100 text-center mt-8 mb-8 lg:mt-10 lg:text-center"
                >
                  {{ title }}
                </p>
              </template>
              <template #buttonText>
                <div
                  class="flex justify-center items-center"
                >
                  <app-button variant="contained">
                    {{ buttonText }}
                  </app-button>
                </div>
              </template>
            </app-card-with-text-description>
          </div>
        </app-col>
      </app-grid>
    </div>
  </section>
</template>
<style scoped>
.card__title {
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 1.71429px;
}
</style>
