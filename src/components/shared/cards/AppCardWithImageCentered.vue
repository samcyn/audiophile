<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

interface AppCardProps {
  image: string;
}

// set defaults props
withDefaults(defineProps<AppCardProps>(), {
  image: '',
});
</script>
<template>
  <div
    class="card bg-grey-100 overflow-hidden flex justify-center p-10 xl:px-16 xl:py-14"
  >
    <figure class="card__figure">
      <slot name="image">
        <img :src="image" alt="card image" />
      </slot>
    </figure>
  </div>
</template>
<style scoped>
@media (min-width: 768px) {
}
</style>
