<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

interface AppCardProps {
  title: string;
  description?: string;
}

// set defaults props
withDefaults(defineProps<AppCardProps>(), {
  title: '',
  description: '',
});
</script>
<template>
  <div class="card overflow-hidden">
    <div class="card__body">
      <h5
        class="card__subtitle font-normal uppercase text-center mb-4 xl:text-left"
      ></h5>
      <h3
        class="card__title font-bold text-center uppercase text-black-100 mb-6 xl:text-left"
        v-html="title"
      ></h3>
      <div
        class="card__description font-medium text-center text-black-100/50 xl:text-left"
        v-html="description"
      ></div>
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
