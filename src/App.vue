<script setup lang="ts">
import AppNavigationBarVue from './components/AppNavigationBar.vue';
import AppHeroComponentVue from './home-page/AppHeroComponent.vue';
import AppFooterVue from './components/AppFooter.vue';
import AppProductCard from './components/AppProductCard.vue';
import AppProductCard2 from './home-page/AppProductCard2.vue';
import AppProductCard3 from './home-page/AppProductCard3.vue';
</script>

<template>
  <app-navigation-bar-vue />
  <app-hero-component-vue />
  <app-product-card />
  <app-product-card2 />
  <app-product-card3 />
  <app-footer-vue />
</template>

<style scoped></style>
