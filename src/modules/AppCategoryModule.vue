<script setup lang="ts">
import AppCardWithFloatingImage from '../components/shared/cards/AppCardWithFloatingImage.vue';

// grids
import AppGrid from '../components/shared/AppGrid.vue';
import AppCol from '../components/shared/AppCol.vue';

import useNavigations from '../hooks/useNavigations';

// images
import ImageProduct from '/src/assets/product-xx99-mark-one-headphones/mobile/image-product.svg';
import ImageSpeakerMobile from '/src/assets/home/mobile/image-speaker-zx9.png';
import ImageEarPhone from '/src/assets/product-yx1-earphones/mobile/image-product.jpg';

const { pushToRoute } = useNavigations();

const onClick = (name: string) => {
  pushToRoute({
    name,
  });
};
</script>
<template>
  <section class="container">
    <!-- grid system -->
    <app-grid class="-mx-5px md:my-0 lg:-mx-15px">
      <app-col
        class="px-5px md:py-0 md:basis-4/12 lg:px-15px"
      >
        <app-card-with-floating-image
          class="mb-4 md:mb-0"
          :image="ImageProduct"
          @on-button-click="
            onClick('headphones-root')
          "
        />
      </app-col>
      <app-col
        class="px-5px md:py-0 md:basis-4/12 lg:px-15px"
      >
        <app-card-with-floating-image
          class="mb-4 md:mb-0"
          :image="ImageSpeakerMobile"
          @on-button-click="
            onClick('speakers-root')
          "
        />
      </app-col>
      <app-col
        class="px-5px md:py-0 md:basis-4/12 lg:px-15px"
      >
        <!-- last item margin bottom is zero -->
        <app-card-with-floating-image
          :image="ImageEarPhone"
          @on-button-click="
            onClick('earphones-root')
          "
        />
      </app-col>
    </app-grid>
  </section>
</template>
