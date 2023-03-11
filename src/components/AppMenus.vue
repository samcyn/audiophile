<script setup lang="ts">
import AppLink from './AppLink.vue';
</script>
<template>
  <ul
    class="menus flex flex-row flex-wrap p-0 m-0 list-none"
  >
    <li class="menus__items">
      <app-link
        url="https://icons.getbootstrap.com/"
        class="links flex text-white font-bold uppercase m-0 hover:text-orange-100"
        >Home</app-link
      >
    </li>
    <li>
      <app-link
        url="https://icons.getbootstrap.com/"
        class="links flex text-white font-bold uppercase m-0 hover:text-orange-100"
        >Headphones</app-link
      >
    </li>
    <li>
      <app-link
        url="https://icons.getbootstrap.com/"
        class="links flex text-white font-bold uppercase m-0 hover:text-orange-100"
        >Speakers</app-link
      >
    </li>
    <li>
      <app-link
        url="https://icons.getbootstrap.com/"
        class="links flex text-white font-bold uppercase m-0 hover:text-orange-100"
        >Earphones</app-link
      >
    </li>
  </ul>
</template>
<style scoped>
.links {
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 2px;
  padding: 1.5px 17px;
}
</style>
