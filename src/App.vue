<script setup lang="ts">
import AppNavigationBarVue from './components/layout/AppNavigationBar.vue';
import AppFooterVue from './components/layout/AppFooter.vue';
import { CartProvider } from './hooks/useCart';

CartProvider();
</script>
<template>
  <app-navigation-bar-vue />
  <router-view></router-view>
  <app-footer-vue />
</template>

<style scoped></style>
