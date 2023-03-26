<script setup lang="ts">
import AppInputField from '../components/shared/AppInputField.vue';
import AppGrid from '../components/shared/AppGrid.vue';
import AppCol from '../components/shared/AppCol.vue';
import AppRadioGroup from '../components/shared/AppRadioGroup.vue';
import AppRadio from '../components/shared/AppRadio.vue';
import AppCardWithImageCentered from '../components/shared/cards/AppCardWithImageCentered.vue';

import useNavigations from '../hooks/useNavigations';

// vue router apis from custom hook
const { goTo } = useNavigations();

const goBack = () => {
  goTo(-1);
};
</script>
<template>
  <section class="container bg-[#fafafa] pt-4 pb-24 md:pt-12 md:pb-[116px]">
    <div class="mb-6 md:mb-6 lg:mb-14">
      <button
        @click="goBack"
        class="text-black-100/50 border-0 outline-0 no-underline font-medium lg:text-[15px] lg:leading-[25px]"
      >
        Go Back
      </button>
    </div>
    <app-grid class="-mx-1 md:-mx-15px">
      <app-col class="px-1 xl:px-15px xl:basis-2/3">
        <!-- forms area -->
        <div
          class="bg-white rounded-lg px-6 pt-6 pb-8 md:py-[30px] md:px-7 xl:pt-[54px] xl:pb-12 xl:px-12"
        >
          <p
            class="mb-8 md:mb-10 font-bold text-[28px] md:text-[32px] leading-[38px] md:leading-9 uppercase tracking-[1px] md:tracking-[1.14286px] text-black-100"
          >
            Checkout
          </p>
          <form>
            <fieldset class="relative mb-8 md:mb-[53px]" name="billing">
              <legend
                class="text-orange-100 font-bold text-[13px] leading-[25px] uppercase tracking-[0.928571px] mb-4"
              >
                Billing
              </legend>
              <app-grid class="-my-3 md:-mx-2">
                <app-col class="py-3 md:px-2 md:basis-1/2">
                  <app-input-field name="name" label="Name" />
                </app-col>
                <app-col class="py-3 md:px-2 md:basis-1/2">
                  <app-input-field name="email" type="email" label="Email Address" />
                </app-col>
                <app-col class="py-3 md:px-2 md:basis-1/2">
                  <app-input-field name="phone" type="phone" label="Phone Number" />
                </app-col>
              </app-grid>
            </fieldset>
            <fieldset class="relative mb-8 md:mb-[61px]" name="shipping info">
              <legend
                class="text-orange-100 font-bold text-[13px] leading-[25px] uppercase tracking-[0.928571px] mb-4"
              >
                Shipping Info
              </legend>
              <app-grid class="-my-3 md:-mx-2">
                <app-col class="py-3 md:px-2 md:basis-full">
                  <app-input-field
                    name="address"
                    label="Your Address"
                    placeholder="1137 Williams Avenue"
                  />
                </app-col>
                <app-col class="py-3 md:px-2 md:basis-1/2">
                  <app-input-field
                    name="zipcode"
                    type="text"
                    label="Zip Code"
                    placeholder="10001"
                  />
                </app-col>
                <app-col class="py-3 md:px-2 md:basis-1/2">
                  <app-input-field name="city" type="text" label="City" placeholder="New York" />
                </app-col>
                <app-col class="py-3 md:px-2 md:basis-1/2">
                  <app-input-field
                    name="country"
                    type="text"
                    label="Country"
                    placeholder="United States"
                  />
                </app-col>
              </app-grid>
            </fieldset>
            <fieldset class="relative" name="payment details">
              <legend
                class="text-orange-100 font-bold text-[13px] leading-[25px] uppercase tracking-[0.928571px] mb-4"
              >
                Payment Details
              </legend>
              <app-grid class="-my-2 md:-mx-2">
                <app-col class="py-2 md:px-2 md:basis-1/2">
                  <p class="font-bold text-black-100 tracking-[-0.214286px] text-xs">
                    payment method
                  </p>
                </app-col>
                <app-col class="py-2 md:px-2 md:basis-1/2">
                  <app-radio-group name="paymentMethod">
                    <app-grid class="-my-2">
                      <app-col class="py-2">
                        <app-radio value="e-money" label="e-Money" />
                      </app-col>
                      <app-col class="py-2">
                        <app-radio value="cash" label="Cash on Delivery" />
                      </app-col>
                    </app-grid>
                  </app-radio-group>
                </app-col>
              </app-grid>
              <div class="mt-5 md:mt-3">
                <app-grid class="-my-3 md:-mx-2">
                  <app-col class="py-3 md:px-2 md:basis-1/2">
                    <app-input-field
                      name="e-money-number"
                      label="e-Money Number"
                      placeholder="23445537"
                    />
                  </app-col>
                  <app-col class="py-3 md:px-2 md:basis-1/2">
                    <app-input-field name="e-money-pin" label="e-Money Pin" placeholder="6578" />
                  </app-col>
                </app-grid>
              </div>
            </fieldset>
          </form>
        </div>
      </app-col>
      <app-col class="px-1 xl:px-15px xl:basis-1/3">
        <!-- summary area 0.6846 -->
        <div class="bg-white rounded-lg px-6 py-8 md:p-8 mt-8 xl:mt-0">
          <p
            class="mb-8 uppercase font-bold text-[18px] leading-[25px] text-black-100 tracking-[1.28571px]"
          >
            Summary
          </p>
          <ul class="flex flex-col gap-6 max-h-60 list-none overflow-y-auto">
            <!-- todo work from here -->
            <li class="flex items-center justify-between">
              <div class="flex gap-4 items-center">
                <app-card-with-image-centered
                  class="h-16 w-16 flex justify-center items-center p-2"
                />
                <div>
                  <p class="font-bold text-[15px] leading-[25px] text-black-100 m-0">xxx99</p>
                  <small class="font-bold text-[14px] leading-[25px] text-black-100/50"
                    >$23444</small
                  >
                </div>
              </div>
              <span
                class="font-bold text-[15px] leading-[25px] text-black-100 opacity-50 mix-blend-normal"
                >x1</span
              >
            </li>
          </ul>
        </div>
      </app-col>
    </app-grid>
  </section>
</template>
<style scoped>
.back-link {
  font-size: 15px;
  line-height: 25px;
}
</style>
