<script setup lang="ts">
import { defineProps, withDefaults, computed } from 'vue';
import AppLink from './AppLink.vue';

// define components models
interface AppMenusProps {
  mode?: 'header' | 'footer';
}

// set defaults props
const props = withDefaults(defineProps<AppMenusProps>(), {
  mode: 'header',
});

const menusClasses = computed(() => {
  if (props.mode === 'footer') {
    return 'flex-col md:flex-row items-center gap-4 md:gap-px';
  }
  return 'flex-row gap-px';
});

const linksClasses = computed(() => {
  if (props.mode === 'footer') {
    return {
      'p-0 md:px-4': true,
    };
  }
  return { 'py-[1.5px] px-4': true };
});
</script>
<template>
  <ul class="menus flex flex-wrap p-0 m-0 list-none" :class="menusClasses">
    <li class="menus__items md:-ml-4">
      <app-link
        to="/"
        class="links flex text-white font-bold uppercase m-0 hover:text-orange-100"
        :class="linksClasses"
        active-class="!text-orange-100"
        >Home</app-link
      >
    </li>
    <li>
      <app-link
        to="/headphones"
        class="links flex text-white font-bold uppercase m-0 hover:text-orange-100"
        :class="linksClasses"
        active-class="!text-orange-100"
        >Headphones</app-link
      >
    </li>
    <li>
      <app-link
        to="/speakers"
        class="links flex text-white font-bold uppercase m-0 hover:text-orange-100"
        :class="linksClasses"
        active-class="!text-orange-100"
        >Speakers</app-link
      >
    </li>
    <li class="md:-mr-4">
      <app-link
        to="/earphones"
        class="links flex text-white font-bold uppercase m-0 hover:text-orange-100"
        :class="linksClasses"
        active-class="!text-orange-100"
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
}
</style>
