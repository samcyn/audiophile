<script setup lang="ts">
import AppBrandLogo from './AppBrandLogo.vue';
import AppIconButton from './AppIconButton.vue';
import AppMenus from './AppMenus.vue';
</script>

<template>
  <header class="relative bg-black-70">
    <div class="container">
      <nav
        class="flex flex-nowrap items-center lg:items-start pt-8 pb-8 lg:pb-9 shadow-[0_1px_0px_0px_rgba(255,255,255,0.2)]"
        aria-label="Main navigation"
      >
        <!-- hamburger bar starts -->
        <div class="flex mr-auto lg:hidden">
          <app-icon-button
            icon="hamburger"
            width="16"
            height="15"
          />
        </div>
        <!-- hamburger bar ends -->

        <!-- logo/brand starts -->
        <app-brand-logo
          class="logo"
          aria-label="audioPhile"
        />
        <!-- logo/brand ends -->

        <!-- menus starts -->
        <div
          class="hidden lg:flex flex-grow items-center justify-center"
        >
          <app-menus />
        </div>
        <!-- menus ended -->

        <!-- carts starts -->
        <div class="flex ml-auto">
          <app-icon-button
            icon="cart"
            width="23"
            height="20"
          />
        </div>
        <!-- cart ends -->
      </nav>
    </div>
  </header>
</template>
<style scoped>
.logo {
  padding: 0;
}

@media (min-width: 1024px) {
  .logo {
    padding: 1.5px 0;
  }
}
</style>
