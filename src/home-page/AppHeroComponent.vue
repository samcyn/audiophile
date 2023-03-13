<script setup lang="ts">
import AppButton from '../components/AppButton.vue';
import ImageHeaderMobile from '../assets/home/mobile/image-header.jpg';
import ImageHeaderTablet from '../assets/home/tablet/image-header.jpg';
import ImageHeaderDesktop from '../assets/home/desktop/image-hero.jpg';
</script>
<template>
  <section class="relative">
    <div
      class="container relative bg-black-90/25 overflow-hidden"
    >
      <div class="wrapper">
        <div
          class="product text-center mx-auto lg:text-left lg:mx-0"
        >
          <p class="product__subtitle">
            NEW PRODUCT
          </p>
          <h3 class="product__title">
            XX99 Mark II HeadphoneS
          </h3>
          <p
            class="product__description mx-auto lg:mx-0"
          >
            Experience natural, lifelike audio and
            exceptional build quality made for the
            passionate music enthusiast.
          </p>
          <app-button class="mt-7 md:mt-10"
            >SEE PRODUCT</app-button
          >
        </div>
      </div>
      <figure
        class="absolute left-0 right-0 bottom-0 w-full -z-10 2xl:max-w-screen-2xl 2xl:m-auto"
      >
        <img
          class="w-full md:hidden"
          :src="ImageHeaderMobile"
          alt="image"
        />
        <img
          class="w-full hidden md:block lg:hidden"
          :src="ImageHeaderTablet"
          alt="image"
        />
        <img
          class="w-full hidden md:hidden lg:block"
          :src="ImageHeaderDesktop"
          alt="image"
        />
      </figure>
    </div>
  </section>
</template>
<style scoped>
.wrapper {
  /* pt-[108px] pb-[112px] md:pt-[126px] md:pb-[167px] lg:pt-16 lg:pb-16 xl:pt-[128px] xl:pb-[158px] */
  padding: 108px 0 112px;
}
.product__subtitle {
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 10px;
  text-transform: uppercase;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.4964);
}
.product__title {
  font-size: 36px;
  line-height: 40px;
  margin-top: 16px;
  letter-spacing: 1.29px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
}
.product__description {
  font-size: 15px;
  line-height: 25px;
  margin-top: 24px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
}

@media (min-width: 768px) {
  .product {
    max-width: 396px;
  }
  .product__title {
    margin-top: 24px;
    font-size: 56px;
    line-height: 58px;
    letter-spacing: 2px;
  }
  .product__description {
    max-width: 349px;
  }
  .wrapper {
    padding: 126px 0 167px;
  }
}
@media (min-width: 1024px) {
  .wrapper {
    padding: 64px 0;
  }
}

@media (min-width: 1280px) {
  .wrapper {
    padding: 128px 0 158px;
  }
}
</style>
