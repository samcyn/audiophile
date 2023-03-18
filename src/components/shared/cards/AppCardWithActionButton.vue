<script setup lang="ts">
import AppButton from '../AppButton.vue';
</script>
<template>
  <div
    class="card w-full bg-grey-100 relative rounded-lg overflow-hidden"
  >
    <div class="card__body flex items-center">
      <div>
        <h3
          class="card__title font-bold mb-8 text-black-100 uppercase"
        >
          YX1 EARPHONES
        </h3>
        <app-button
          variant="outlined"
          button-type="secondary"
          >SEE PRODUCT</app-button
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
.card__body {
  padding: 41px 24px;
}
.card__title {
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
}

@media (min-width: 768px) {
  .card__body {
    padding: 101px 41px;
  }
}
@media (min-width: 1440px) {
  .card__body {
    padding: 101px 95px;
  }
}
</style>
