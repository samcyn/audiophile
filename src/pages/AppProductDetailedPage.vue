<script setup lang="ts">
import { onMounted, ref } from 'vue';

// modules
import AppTwoColumnModule from '../modules/AppTwoColumnModule.vue';
import AppAudioGearModule from '../modules/AppAudioGearModule.vue';
import AppCategoryModule from '../modules/AppCategoryModule.vue';
import AppYouMayAlsoLikeModule from '../modules/AppYouMayAlsoLikeModule.vue';
import AppGalleryModule from '../modules/AppGalleryModule.vue';
import AppInTheBoxModule from '../modules/AppInTheBoxModule.vue';
import AppAddToCartWidget from '../components/product-detailed-page/AppAddToCartWidget.vue';
import AppPageLoader from '../components/shared/AppPageLoader.vue';

// productService
import productService from '../services';

// vue router navigations api
import useNavigations from '../hooks/useNavigations';

interface Props {
  slug: string;
}
const loading = ref(false);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const product = ref<Record<string, any>>({});

const props = withDefaults(defineProps<Props>(), {});

// vue router apis from custom hook
const { goTo, onBeforeRouteUpdate } = useNavigations();

// fetch product
const getOneProduct = async (slug: string) => {
  loading.value = true;
  const response = await productService.getOneProduct(slug as string);
  product.value = response || {};
  loading.value = false;
};

// get product on first mounted
onMounted(async () => {
  const slug = props.slug;
  await getOneProduct(slug);
});

// fetch product when params changes
onBeforeRouteUpdate(async (to, from, next) => {
  const slug = to.params.slug as string;
  getOneProduct(slug);
  next();
});

// go back to previous route
const goBack = () => {
  goTo(-1);
};
</script>
<template>
  <app-page-loader :loading="loading">
    <div class="container back-link mt-4 mb-6 md:mt-8 md:mb-6 lg:mt-20 lg:mb-14">
      <button
        @click="goBack"
        class="text-black-100/50 border-0 outline-0 no-underline font-medium lg:text-[15px] lg:leading-[25px]"
      >
        Go Back
      </button>
    </div>
    <!-- Two Column Modules to manage cards -->
    <app-two-column-module
      class="mb-22 md:mb-30 lg:mb-40"
      flex-container-class="flex-col md:flex-row md:gap-[69px] md:items-center lg:flex-row lg:gap-125px lg:items-center"
      card-with-image-centered="
      pb-17 pl-42px pr-42px pt-10 xl:p-16 
      h-[327px] mb-10 md:w-[281px] md:mb-0 md:shrink-0 
      md:h-120 lg:w-135 lg:h-140
      items-center
    "
      card-with-text-extra-class="md:max-w-[339px] lg:max-w-[445px]"
      :image="product.image"
    >
      <template #subTitle>
        <p
          v-if="product.new"
          class="cardSubTitle text-xs font-normal uppercase text-orange-100 mb-4 lg:text-left lg:text-[14px] lg:leading-[19px]"
        >
          New Product
        </p>
      </template>
      <template #title>
        <p class="cardTitle font-bold uppercase text-black-100 mb-6 md:mb-8 lg:text-left">
          {{ product.name }}
        </p>
      </template>
      <template #description>
        <slot name="description">
          <div class="cardDescription font-medium text-black-100/50 lg:text-left">
            {{ product.description }}
          </div>
        </slot>
      </template>
      <template #extraContent>
        <div class="mt-6 lg:mt-8">
          <p class="item_price font-bold uppercase text-black-100">$ {{ product.price }}</p>
          <!-- cart button right here -->
          <app-add-to-cart-widget :product="product" />
        </div>
      </template>
    </app-two-column-module>

    <app-in-the-box-module
      class="flex-col lg:flex-row lg:gap-125px lg:items-center"
      box-title="In the Box"
      card-title="Feature"
      :card-description="product.features"
      :items-included="product.includes"
    >
    </app-in-the-box-module>

    <app-gallery-module :gallery="product.gallery" />

    <app-you-may-also-like-module :items="product.others" />

    <app-category-module class="mb-30 xl:mb-40" />

    <app-audio-gear-module class="mb-30 xl:mb-40" />
  </app-page-loader>
</template>
<style scoped>
.back-link {
  font-size: 15px;
  line-height: 25px;
}
.item_price {
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1.28571px;
  margin-bottom: 31px;
}
.cardSubTitle {
  letter-spacing: 8.57143px;
}
.cardTitle {
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
}
.cardDescription {
  font-size: 15px;
  line-height: 25px;
  mix-blend-mode: normal;
}

@media (min-width: 768px) {
  .cardTitle {
    font-size: 28px;
    line-height: 32px;
    letter-spacing: 1px;
  }
}

@media (min-width: 1024px) {
  .cardTitle {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.42857px;
  }
  .item_price {
    margin-bottom: 47px;
  }
}
</style>
