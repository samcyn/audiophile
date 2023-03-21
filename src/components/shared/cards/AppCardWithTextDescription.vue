<script setup lang="ts">
import {
  defineProps,
  withDefaults,
  Events,
} from 'vue';

import AppButton from '../AppButton.vue';

interface AppCardProps {
  subTitle?: string;
  title: string;
  description?: string;
  buttonText?: string;
}

// set defaults props
withDefaults(defineProps<AppCardProps>(), {
  subTitle: '',
  title: '',
  description: '',
  buttonText: '',
});

const emit = defineEmits(['onActionButtonClick']);

const onClick = (event: Events['onClick']) => {
  emit('onActionButtonClick', event);
};
</script>
<template>
  <div class="card overflow-hidden">
    <div class="card__body">
      <slot name="subTitle">
        <h5
          v-if="subTitle"
          class="card__subtitle font-normal uppercase text-orange-100 mb-4 lg:text-left"
        >
          {{ subTitle }}
        </h5>
      </slot>
      <slot name="title">
        <h3
          v-if="title"
          class="card__title font-bold uppercase text-black-100 mb-6 md:mb-8 lg:text-left"
        >
          {{ title }}
        </h3>
      </slot>
      <slot name="description">
        <div
          v-if="description"
          class="card__description font-medium text-black-100/50 lg:text-left"
        >
          {{ description }}
        </div>
      </slot>
      <slot name="buttonText">
        <div
          v-if="buttonText"
          class="flex justify-center items-center mt-6 lg:justify-start lg:mt-10"
        >
          <app-button
            variant="contained"
            @click="onClick"
          >
            {{ buttonText }}
          </app-button>
        </div>
      </slot>
      <!-- default slot for other contents -->
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.card__subtitle {
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 10px;
}
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
}
</style>
