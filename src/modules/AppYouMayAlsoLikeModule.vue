<script setup lang="ts">
import AppCardWithTextDescription from '../components/shared/cards/AppCardWithTextDescription.vue';
import AppCardWithImageCentered from '../components/shared/cards/AppCardWithImageCentered.vue';

import AppButton from '../components/shared/AppButton.vue';

// grids
import AppGrid from '../components/shared/AppGrid.vue';
import AppCol from '../components/shared/AppCol.vue';

// custom hooks for vue router
import useNavigations from '../hooks/useNavigations';

type IP = {
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

interface Props {
  buttonText?: string;
  items: IP[];
}

const { replaceToRoute, getRouteName } =
  useNavigations();

withDefaults(defineProps<Props>(), {
  buttonText: 'SEE PRODUCT',
  items: () => [],
});

const onClick = (slug: string) => {
  const name =
    getRouteName() || 'product-details';
  replaceToRoute({
    name,
    params: { slug },
  });
};
</script>
<template>
  <section class="mb-30 lg:mb-40">
    <div class="container">
      <app-grid class="-mx-5px lg:-mx-15px">
        <app-col
          v-for="(item, index) in items"
          :key="item.slug"
          class="px-5px md:basis-4/12 md:w-4/12 lg:px-15px"
        >
          <!-- last item margin-bottom is 0 -->
          <div
            :class="`${
              index + 1 === items.length
                ? 'mb-14'
                : ''
            } md:mb-0`"
          >
            <app-card-with-image-centered
              class="py-3 h-30 md:h-318px"
              :image-mobile="item.image.mobile"
              :image-tablet="item.image.tablet"
              :image-desktop="item.image.desktop"
            />
            <app-card-with-text-description
              class="w-full"
            >
              <template #title>
                <p
                  class="card__title font-bold uppercase text-black-100 text-center mt-8 mb-8 lg:mt-10 lg:text-center"
                >
                  {{ item.name }}
                </p>
              </template>
              <template #buttonText>
                <div
                  class="flex justify-center items-center"
                >
                  <app-button
                    variant="contained"
                    @click="onClick(item.slug)"
                  >
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
