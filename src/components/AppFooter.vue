<script setup lang="ts">
import AppBrandLogo from './AppBrandLogo.vue';
import AppIconButton from './AppIconButton.vue';
import AppMenus from './AppMenus.vue';
</script>
<template>
  <footer class="bg-black-90">
    <div
      class="container mx-auto px-6 relative pt-[52px] pb-[38px] md:pt-[60px] md:pb-[46px] lg:pt-[75px] lg:pb-12"
    >
      <nav
        class="flex flex-col items-center gap-12 md:items-start md:gap-8 lg:flex-row lg:items-center lg:justify-between"
      >
        <app-brand-logo aria-label="audioPhile" />
        <app-menus mode="footer" />
        <div
          class="absolute w-[101px] h-1 bg-orange-100 top-0"
        ></div>
      </nav>
      <p
        class="mt-12 md:mt-8 lg:mt-9 text-white/50 text-[15px] leading-[25px] text-center md:text-left font-medium lg:max-w-[540px]"
      >
        Audiophile is an all in one stop to
        fulfill your audio needs. We're a small
        team of music lovers and sound specialists
        who are devoted to helping you get the
        most out of personal audio. Come and visit
        our demo facility - we’re open 7 days a
        week.
      </p>
      <div
        class="flex items-center justify-between flex-wrap mt-12 md:mt-20 lg:mt-14"
      >
        <p
          class="text-white/50 text-[15px] leading-[25px] text-center md:text-left font-bold basis-full md:basis-auto"
        >
          Copyright 2023. All Rights Reserved
        </p>
        <ul
          class="flex items-center gap-4 basis-full md:basis-auto mt-12 md:mt-0 lg:-mt-[167px] justify-center"
        >
          <li class="flex items-center">
            <app-icon-button
              icon="facebook"
              height="24px"
              width="24px"
            />
          </li>
          <li class="flex items-center">
            <app-icon-button
              icon="twitter"
              height="19.5px"
              width="24px"
            />
          </li>
          <li class="flex items-center">
            <app-icon-button
              icon="instagram"
              height="24px"
              width="24px"
            />
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<style scoped></style>
