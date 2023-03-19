<script setup lang="ts">
import AppButton from '../shared/AppButton.vue';
</script>
<template>
  <section class="relative bg-black-60">
    <div
      class="container relative overflow-hidden"
    >
      <div class="wrapper -mx-6 sm:mx-0">
        <div class="wrapper__absolute"></div>
        <div
          class="product relative text-center mx-auto lg:text-left lg:mx-0 pl-[23px] pr-6 sm:pl-0 sm:pr-0"
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
      <!-- <figure
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
      </figure> -->
    </div>
  </section>
</template>
<style scoped>
.wrapper {
  /* pt-[108px] pb-[112px] md:pt-[126px] md:pb-[167px] lg:pt-16 lg:pb-16 xl:pt-[128px] xl:pb-[158px] */
  padding: 108px 0 112px;
}
.wrapper__absolute {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background-image: url('/src/assets/home/mobile/image-header.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
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
  .wrapper__absolute {
    background-image: url('/src/assets/home/tablet/image-header.jpg');
  }
}
@media (min-width: 1024px) {
  .wrapper {
    padding: 64px 0;
  }
  .wrapper__absolute {
    background-image: url('/src/assets/home/desktop/image-hero.svg');
    background-size: 100%;
    background-position: 0 bottom;
  }
}

@media (min-width: 1280px) {
  .wrapper {
    padding: 128px 0 158px;
  }
  .wrapper__absolute {
    background-image: url('/src/assets/home/desktop/image-hero.svg');
    background-size: 1440px;
    background-position: 0 bottom;
  }
}

@media (min-width: 1536px) {
  .wrapper__absolute {
    background-size: 1440px;
  }
}
</style>
