<script setup lang="ts">
import AppBrandLogo from '../shared/AppBrandLogo.vue';
import AppIconButton from '../shared/AppIconButton.vue';
import AppMenus from '../shared/AppMenus.vue';
</script>
<template>
  <footer class="bg-black-90">
    <div class="footer__container container relative lg:pb-12">
      <nav
        class="flex flex-col items-center gap-12 md:items-start md:gap-8 lg:flex-row lg:items-center lg:justify-between"
      >
        <app-brand-logo aria-label="audioPhile" />
        <app-menus mode="footer" />
        <div class="footer__indicator absolute h-1 bg-orange-100 top-0"></div>
      </nav>
      <p
        class="footer__description mt-12 md:mt-8 lg:mt-9 text-white/50 text-center md:text-left font-medium"
      >
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music
        lovers and sound specialists who are devoted to helping you get the most out of personal
        audio. Come and visit our demo facility - we’re open 7 days a week.
      </p>
      <div class="flex items-center justify-between flex-wrap mt-12 md:mt-20 lg:mt-14">
        <p
          class="footer__copyright-text text-white/50 text-center md:text-left font-bold basis-full md:basis-auto"
        >
          Copyright 2023. All Rights Reserved
        </p>
        <ul
          class="footer__socials flex items-center gap-4 basis-full md:basis-auto mt-12 md:mt-0 justify-center"
        >
          <li class="flex items-center">
            <app-icon-button icon="facebook" height="24px" width="24px" />
          </li>
          <li class="flex items-center">
            <app-icon-button icon="twitter" height="19.5px" width="24px" />
          </li>
          <li class="flex items-center">
            <app-icon-button icon="instagram" height="24px" width="24px" />
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer__container {
  padding-top: 52px;
  padding-bottom: 38px;
}
.footer__indicator {
  width: 101px;
}
.footer__description {
  font-size: 15px;
  line-height: 25px;
}
.footer__copyright-text {
  font-size: 15px;
  line-height: 25px;
}

@media (min-width: 768px) {
  .footer__container {
    padding-top: 60px;
    padding-bottom: 46px;
  }
}

@media (min-width: 1024px) {
  .footer__container {
    padding-top: 75px;
  }

  .footer__description {
    max-width: 540px;
  }
  .footer__socials {
    margin-top: -167px;
  }
}
</style>
