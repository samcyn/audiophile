<script setup lang="ts">
import AppCardWithFloatingImage from '../components/shared/cards/AppCardWithFloatingImage.vue';

// grids
import AppGrid from '../components/shared/AppGrid.vue';
import AppCol from '../components/shared/AppCol.vue';

// images
import ImageProduct from '/src/assets/product-xx99-mark-one-headphones/mobile/image-product.svg';
import ImageSpeakerMobile from '/src/assets/home/mobile/image-speaker-zx9.png';
import ImageEarPhone from '/src/assets/product-yx1-earphones/mobile/image-product.jpg';
</script>
<template>
  <section class="container">
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
</template>
