<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';

import AppMiniHero from '../components/shared/AppMiniHero.vue';
import AppButton from '../components/shared/AppButton.vue';

// modules
import AppTwoColumnModule from '../modules/AppTwoColumnModule.vue';
import AppAudioGearModule from '../modules/AppAudioGearModule.vue';
import AppCategoryModule from '../modules/AppCategoryModule.vue';

// productService
import productService from '../services';

// custom hooks for vue router
import useNavigations from '../hooks/useNavigations';

interface Props {
  pageTitle: string;
  category: string;
  detailPageName: string;
}

const props = withDefaults(defineProps<Props>(), {
  pageTitle: 'HEADPHONES',
  category: 'headphones',
  detailPageName: 'product-details',
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const products = ref<Record<string, any>[]>([]);

// vue router api in custom hook
const { pushToRoute } = useNavigations();

//  action to go to a specific page
const onClick = (slug: string) => {
  pushToRoute({
    name: props.detailPageName,
    params: { slug },
  });
};

// get category method
const getCategory = async () => {
  const P = await productService.getCategory(props.category);
  products.value = P;
};

// fecth categories on mounted
onMounted(async () => {
  await getCategory();
});

// watch out for category changes and fetch data again
watch(
  () => props.category,
  async () => {
    await getCategory();
  }
);

// turn off timers to prevent memory leakage
onUnmounted(() => {
  // off all timers
  productService.clearTimerId();
});
</script>
<template>
  <app-mini-hero :title="pageTitle" class="mb-16 md:mb-30 lg:mb-40" />

  <!-- two column module -->
  <app-two-column-module
    v-for="(product, index) in products"
    :key="product.slug"
    class="mb-30 lg:mb-40"
    :flex-container-class="`flex-col lg:gap-14 xl:gap-125px lg:items-center ${
      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
    }`"
    card-with-image-centered="
      pb-17 pl-42px pr-42px pt-10 xl:p-16 
      h-88 mb-8 md:mb-13 lg:mb-0 lg:w-115 xl:w-135 lg:h-140
    "
    card-with-text-extra-class="lg:max-w-[105px] xl:max-w-[445px]"
    :image="product.image"
  >
    <template #subTitle>
      <p
        v-if="product.new"
        class="cardSubTitle text-[14px] leading-[19px] tracking-[10px] text-center font-normal uppercase text-orange-100 mb-6 md:mb-4 lg:text-left lg:text-[14px] lg:leading-[19px]"
      >
        New Product
      </p>
    </template>
    <template #title>
      <p
        class="cardTitle font-bold text-[28px] leading-[38px] tracking-[1px] text-center uppercase text-black-100 mb-6 md:mb-8 md:text-[40px] md:leading-[44px] md:tracking-[1.42857px] md:max-w-lg md:mx-auto lg:text-left"
      >
        {{ product.name }}
      </p>
    </template>
    <template #description>
      <slot name="description">
        <div
          class="cardDescription font-medium text-[15px] leading-[25px] text-center text-black-100/50 md:max-w-[572px] md:m-auto lg:text-left"
        >
          {{ product.description }}
        </div>
      </slot>
    </template>
    <template #buttonText>
      <div class="flex justify-center lg:justify-start mt-6 xl:mt-10">
        <app-button @click="onClick(product.slug)">See product</app-button>
      </div>
    </template>
  </app-two-column-module>

  <app-category-module class="mb-30 xl:mb-40" />

  <app-audio-gear-module class="mb-30 xl:mb-40" />
</template>
