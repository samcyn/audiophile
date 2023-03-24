<script setup lang="ts">
import AppButton from '../components/shared/AppButton.vue';
import AppNumberInput from '../components/shared/AppNumberInput.vue';
import AppLink from '../components/shared/AppLink.vue';
// modules
import AppTwoColumnModule from '../modules/AppTwoColumnModule.vue';
import AppAudioGearModule from '../modules/AppAudioGearModule.vue';
import AppCategoryModule from '../modules/AppCategoryModule.vue';
import AppYouMayAlsoLikeModule from '../modules/AppYouMayAlsoLikeModule.vue';
import AppSampleModule from '../modules/AppSampleModule.vue';
import AppInTheBoxModule from '../modules/AppInTheBoxModule.vue';
</script>
<template>
  <div
    class="container back-link mt-4 mb-6 md:mt-8 md:mb-6 lg:mt-20 lg:mb-14"
  >
    <app-link
      url="/headphones"
      class="text-black-100/50 font-medium lg:text-[15px] lg:leading-[25px]"
      >Go Back</app-link
    >
  </div>
  <!-- two column module -->
  <app-two-column-module
    class="mb-22 md:mb-30 lg:mb-40"
    flex-container-class="flex-col md:flex-row md:gap-[69px] md:items-center lg:flex-row lg:gap-125px lg:items-center"
    card-with-image-centered="
      pb-17 pl-42px pr-42px pt-10 xl:p-16 
      h-[327px] mb-10 md:w-[281px] md:mb-0 md:shrink-0 
      md:h-120 lg:w-135 lg:h-140
    "
    card-with-text-extra-class="md:max-w-[339px] lg:max-w-[445px]"
  >
    <template #subTitle>
      <p
        class="cardSubTitle text-xs font-normal uppercase text-orange-100 mb-4 lg:text-left lg:text-[14px] lg:leading-[19px]"
      >
        New Product
      </p>
    </template>
    <template #title>
      <p
        class="cardTitle font-bold uppercase text-black-100 mb-6 md:mb-8 lg:text-left"
      >
        XX99 Mark II Headphones
      </p>
    </template>
    <template #description>
      <slot name="description">
        <div
          class="cardDescription font-medium text-black-100/50 lg:text-left"
        >
          The new XX99 Mark II headphones is the
          pinnacle of pristine audio. It redefines
          your premium headphone experience by
          reproducing the balanced depth and
          precision of studio-quality sound.
        </div>
      </slot>
    </template>
    <template #extraContent>
      <div class="mt-6 lg:mt-8">
        <p
          class="item_price font-bold uppercase text-black-100"
        >
          23344
        </p>
        <div class="flex items-center gap-4">
          <app-number-input />
          <app-button>Add to cart</app-button>
        </div>
      </div>
    </template>
  </app-two-column-module>

  <app-in-the-box-module
    class="flex-col lg:flex-row lg:gap-125px lg:items-center"
    box-title="In the Box"
    card-title="Feature"
    :card-description="`Featuring a genuine leather head strap and
      premium earcups, these headphones deliver
      superior comfort for those who like to enjoy
      endless listening. It includes intuitive
      controls designed for any situation. Whether
      you’re taking a business call or just in
      your own personal space, the auto on/off and
      pause features ensure that you’ll never miss
      a beat. <br /><br /> The advanced Active Noise
      Cancellation with built-in equalizer allow
      you to experience your audio world on your
      terms. It lets you enjoy your audio in
      peace, but quickly interact with your
      surroundings when you need to. Combined with
      Bluetooth 5. 0 compliant connectivity and 17
      hourbattery life, the XX99 Mark II
      headphones gives you superior sound,
      cutting-edge technology, and a modern design
      aesthetic.`"
  >
  </app-in-the-box-module>

  <app-sample-module />

  <app-you-may-also-like-module />

  <app-category-module class="mb-30 xl:mb-40" />

  <app-audio-gear-module class="mb-30 xl:mb-40" />
</template>
<style scoped>
.back-link {
  font-size: 15px;
  line-height: 25px;
}
.item_price {
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1.28571px;
  margin-bottom: 31px;
}
.cardSubTitle {
  letter-spacing: 8.57143px;
}
.cardTitle {
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
}
.cardDescription {
  font-size: 15px;
  line-height: 25px;
  mix-blend-mode: normal;
}

@media (min-width: 768px) {
  .cardTitle {
    font-size: 28px;
    line-height: 32px;
    letter-spacing: 1px;
  }
}

@media (min-width: 1024px) {
  .cardTitle {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.42857px;
  }
  .item_price {
    margin-bottom: 47px;
  }
}
</style>
