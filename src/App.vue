<script setup lang="ts">
import AppNavigationBarVue from './components/layout/AppNavigationBar.vue';
import AppFooterVue from './components/layout/AppFooter.vue';
import AppCartModule from './modules/AppCartModule.vue';
import { CartProvider } from './hooks/useCart';

CartProvider();
</script>
<template>
  <app-navigation-bar-vue />
  <router-view></router-view>
  <app-footer-vue />
  <!-- global cart module -->
  <app-cart-module />
</template>

<style scoped></style>
