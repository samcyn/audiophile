<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

interface AppCardProps {
  subTitle?: string;
  title: string;
  description?: string;
}

// set defaults props
withDefaults(defineProps<AppCardProps>(), {
  subTitle: '',
  title: '',
  description: '',
});
</script>
<template>
  <div class="card overflow-hidden">
    <div class="card__body">
      <slot name="subTitle">
        <h5
          v-if="title"
          class="card__subtitle font-normal uppercase text-center mb-4 lg:text-left"
        >
          {{ subTitle }}
        </h5>
      </slot>
      <slot name="title">
        <h3
          v-if="title"
          class="card__title font-bold text-center uppercase text-black-100 mb-6 lg:text-left"
        >
          {{ title }}
        </h3>
      </slot>
      <slot name="description">
        <div
          v-if="description"
          class="card__description font-medium text-center text-black-100/50 lg:text-left"
        >
          {{ description }}
        </div>
      </slot>
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
