<script setup lang="ts">
import AppButton from '../shared/AppButton.vue';
import AppImage from '../shared/AppImage.vue';

import useNavigations from '../../hooks/useNavigations';

import ImageHeaderMobile from '/src/assets/home/mobile/image-header.jpg';
import ImageHeaderTablet from '/src/assets/home/tablet/image-header.jpg';
import ImageHeaderDesktop from '/src/assets/home/desktop/image-hero.svg';

interface AppHeroComponentProps {
  slug: string;
  subTitle?: string;
  title?: string;
  description?: string;
  imageMobile?: string;
  imageTablet?: string;
  imageDesktop?: string;
}

// set defaults props
const props = withDefaults(defineProps<AppHeroComponentProps>(), {
  subTitle: 'NEW PRODUCT',
  title: 'XX99 Mark II HeadphoneS',
  description: `Experience natural, lifelike audio and
      exceptional build quality made for the
      passionate music enthusiast.`,
  imageMobile: ImageHeaderMobile,
  imageTablet: ImageHeaderTablet,
  imageDesktop: ImageHeaderDesktop,
});

const { pushToRoute } = useNavigations();

const onClick = () => {
  pushToRoute({
    name: 'product-details',
    params: { slug: props.slug },
  });
};
</script>
<template>
  <section class="relative bg-black-60">
    <div class="container relative overflow-hidden">
      <div class="wrapper relative -mx-6 sm:mx-0">
        <div
          class="product relative text-center mx-auto lg:text-left lg:mx-0 pl-6 pr-6 md:pl-0 md:pr-0"
        >
          <p class="product__subtitle">
            {{ subTitle }}
          </p>
          <h3 class="product__title">
            {{ title }}
          </h3>
          <p class="product__description mx-auto lg:mx-0">
            {{ description }}
          </p>
          <app-button class="mt-7 md:mt-10" @click="onClick">SEE PRODUCT</app-button>
        </div>
      </div>

      <figure class="card__figure absolute block left-0 top-0 w-full h-full opacity-50">
        <app-image class="w-full absolute bottom-0 md:hidden" :src="imageMobile" alt="image" />
        <app-image
          class="w-full absolute bottom-0 hidden md:block lg:hidden"
          :src="imageTablet"
          alt="image"
        />
        <app-image
          class="w-full absolute bottom-0 hidden md:hidden lg:block"
          :src="imageDesktop"
          alt="image"
        />
      </figure>
    </div>
  </section>
</template>
<style scoped>
.wrapper {
  padding: 108px 0 112px;
  z-index: 2;
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
.card__figure {
  z-index: 1;
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
