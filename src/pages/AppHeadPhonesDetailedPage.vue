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
      class="text-black-100/50 font-medium"
      >Go Back</app-link
    >
  </div>
  <!-- two column module -->
  <app-two-column-module
    class="mb-[88px] md:mb-[120px] lg:mb-40"
    card-with-image-centered="pb-[68px] pl-[42px] pr-[42px] pt-10 xl:p-16 h-[327px] mb-10"
    title="XX99 Mark II Headphones"
    description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
  >
    <template #extraContent>
      <div class="mt-6">
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

  <app-category-module
    class="mb-[120px] xl:mb-40"
  />

  <app-audio-gear-module
    class="mb-[120px] xl:mb-40"
  />
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
</style>
