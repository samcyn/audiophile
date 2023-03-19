<script setup lang="ts">
import AppNavigationBarVue from './components/layout/AppNavigationBar.vue';
import AppHeroComponentVue from './home-page/AppHeroComponent.vue';
import AppFooterVue from './components/layout/AppFooter.vue';
import AppProductCard from './components/shared/cards/AppCardWithFloatingImage.vue';
import AppProductCard2 from './home-page/AppProductCard2.vue';
import AppProductCard3 from './home-page/AppProductCard3.vue';
import AppGrid from './components/shared/AppGrid.vue';
import AppCol from './components/shared/AppCol.vue';
</script>

<template>
  <app-navigation-bar-vue />
  <app-hero-component-vue />
  <div class="container">
    <app-grid :gutter-x="10">
      <app-col :md="6" :xl="4">
        <app-product-card />
      </app-col>
      <app-col :xl="4">
        <app-product-card />
      </app-col>
      <app-col :xl="4">
        <app-product-card />
      </app-col>
      <app-col :xl="4">
        <app-product-card />
      </app-col>
    </app-grid>
  </div>
  <app-product-card2 />
  <app-product-card3 />
  <app-footer-vue />
</template>

<style scoped></style>
