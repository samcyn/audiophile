<script setup lang="ts">
import AppBrandLogo from '../shared/AppBrandLogo.vue';
import AppIconButton from '../shared/AppIconButton.vue';
import AppMenus from '../shared/AppMenus.vue';
</script>

<template>
  <header class="relative bg-black-60">
    <div class="container">
      <nav
        class="header__nav flex flex-nowrap items-center lg:items-start pt-8 pb-8 lg:pb-9"
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
.header__nav {
  --tw-shadow: 0 1px 0px 0px
    rgba(255, 255, 255, 0.2);
  --tw-shadow-colored: 0 1px 0px 0px
    var(--tw-shadow-color);
  box-shadow: var(
      --tw-ring-offset-shadow,
      0 0 #0000
    ),
    var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
@media (min-width: 1024px) {
  .logo {
    padding: 1.5px 0;
  }
}
</style>
