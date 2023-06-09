<script setup lang="ts">
import { defineProps, withDefaults, defineEmits, Events } from 'vue';
import AppButton from '../AppButton.vue';
import AppIcon from '../AppIcon.vue';
import AppImage from '../AppImage.vue';
// define components models
interface AppCardProps {
  title?: string;
  image?: string;
}

// set defaults props
withDefaults(defineProps<AppCardProps>(), {
  title: 'Speaker',
  image: '',
});
const emit = defineEmits(['onButtonClick']);

const onClick = (event: Events['onClick']) => {
  emit('onButtonClick', event);
};
</script>
<template>
  <div class="card relative overflow-hidden max-w-sm m-auto">
    <div class="card__contents flex flex-col items-center justify-center px-6">
      <figure class="card__figure mb-9 relative">
        <slot name="image">
          <app-image :src="image" alt="product card image" class="card__image" />
        </slot>
        <div class="card__oval absolute bottom-0"></div>
      </figure>
      <p class="card__title">
        {{ title }}
      </p>
      <app-button variant="text" @click="onClick">
        <span class="mr-1.5">Shop</span>
        <app-icon
          class-name="text-orange-100 opacity-100"
          icon="arrow-forward-right"
          viewBox="0 0 24 24"
        />
      </app-button>
    </div>
    <div class="card__overlay absolute top-0 bottom-0 left-0 right-0 -z-10 w-full h-full">
      <div class="w-full h-full rounded-lg bg-grey-100"></div>
    </div>
  </div>
</template>
<style scoped>
.card__contents {
  padding-bottom: 7px;
}
.card__title {
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 1.07143px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 2px;
}
.card__overlay {
  padding-top: 52px;
}
.card__oval {
  width: 94.89px;
  height: 14px;
  background: #000000;
  filter: blur(21.7463px);
}
.card__image {
  height: 104px;
}

@media (min-width: 1024px) {
  .card__title {
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 1.28571px;
    margin-bottom: 0px;
  }
  .card__contents {
    padding-bottom: 15px;
  }
  .card__image {
    height: 160px;
  }
}
</style>
