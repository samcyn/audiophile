<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

// define components models
interface AppMiniHeroProps {
  title: string;
}

// set defaults props
withDefaults(defineProps<AppMiniHeroProps>(), {
  title: '',
});
</script>
<template>
  <section class="relative bg-black-100">
    <div class="container py-8 text-center">
      <slot name="title">
        <p class="title text-center text-white font-bold uppercase">
          {{ title }}
        </p>
      </slot>
    </div>
  </section>
</template>
<style scoped>
.title {
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
}

@media (min-width: 768px) {
  /* take care not to remove horizontal paddings set globally on containers */
  .container {
    padding-top: 105px;
    padding-bottom: 97px;
  }
  .title {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.42857px;
  }
}

@media (min-width: 1024px) {
  /* take care not to remove horizontal paddings set globally on containers */
  .container {
    padding-top: 98px;
    padding-bottom: 97px;
  }
}
</style>
