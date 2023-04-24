<script setup lang="ts">
import { ref, Events, reactive } from 'vue';

import AppInputField from '../components/shared/AppInputField.vue';
import AppGrid from '../components/shared/AppGrid.vue';
import AppCol from '../components/shared/AppCol.vue';
import AppRadioGroup from '../components/shared/AppRadioGroup.vue';
import AppRadio from '../components/shared/AppRadio.vue';
import AppButton from '../components/shared/AppButton.vue';
import AppCardWithImageCentered from '../components/shared/cards/AppCardWithImageCentered.vue';
import AppModal from '../components/shared/AppModal.vue';
import AppIcon from '../components/shared/AppIcon.vue';
import AppPageLoader from '../components/shared/AppPageLoader.vue';

import useNavigations from '../hooks/useNavigations';
import { useCart } from '../hooks/useCart';

// orderService
import orderService from '../services/order';

const formSubmittedSuccessfully = ref(false);
const loading = ref(false);

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  address: '',
  zipcode: '',
  city: '',
  country: '',
  paymentMethod: 'cash',
  eMoneyNumber: '',
  eMoneyPin: '',
});

const { carts, vatCost, shippingCost, totalPriceInCart, grandTotal, clearCart } = useCart();
// vue router apis from custom hook
const { goTo, pushToRoute } = useNavigations();

const goBack = () => {
  goTo(-1);
};

const goToHomePage = () => {
  clearCart();
  pushToRoute({
    name: 'home',
  });
};

const onSubmit = async (event: Events['onSubmit']) => {
  event.preventDefault();
  const payload = {
    formData,
    carts: carts.value,
  };
  loading.value = true;
  try {
    await orderService.createOrder(payload);
    formSubmittedSuccessfully.value = true;
    loading.value = false;
  } catch (err) {
    // handle error
    console.log(err);
  }
};
</script>
<template>
  <app-page-loader :loading="loading">
    <section class="bg-[#fafafa] pt-4 pb-24 md:pt-12 md:pb-[116px]">
      <div class="container">
        <div class="mb-6 md:mb-6 lg:mb-14">
          <button
            @click="goBack"
            class="text-black-100/50 border-0 outline-0 no-underline font-medium lg:text-[15px] lg:leading-[25px]"
          >
            Go Back
          </button>
        </div>
        <form @submit="onSubmit" autocomplete="off">
          <app-grid class="-mx-1 md:-mx-15px xl:-mx-15px">
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

                <fieldset class="relative mb-8 md:mb-[53px]" name="billing">
                  <legend
                    class="text-orange-100 font-bold text-[13px] leading-[25px] uppercase tracking-[0.928571px] mb-4"
                  >
                    Billing
                  </legend>
                  <app-grid class="-my-3 md:-mx-2">
                    <app-col class="py-3 md:px-2 md:basis-1/2">
                      <app-input-field name="name" label="Name" v-model="formData.name" required />
                    </app-col>
                    <app-col class="py-3 md:px-2 md:basis-1/2">
                      <app-input-field
                        name="email"
                        type="email"
                        label="Email Address"
                        v-model="formData.email"
                        required
                      />
                    </app-col>
                    <app-col class="py-3 md:px-2 md:basis-1/2">
                      <app-input-field
                        name="phone"
                        type="phone"
                        label="Phone Number"
                        v-model="formData.phone"
                        required
                      />
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
                        v-model="formData.address"
                        required
                      />
                    </app-col>
                    <app-col class="py-3 md:px-2 md:basis-1/2">
                      <app-input-field
                        name="zipcode"
                        type="text"
                        label="Zip Code"
                        placeholder="10001"
                        v-model="formData.zipcode"
                        required
                      />
                    </app-col>
                    <app-col class="py-3 md:px-2 md:basis-1/2">
                      <app-input-field
                        name="city"
                        type="text"
                        label="City"
                        placeholder="New York"
                        v-model="formData.city"
                        required
                      />
                    </app-col>
                    <app-col class="py-3 md:px-2 md:basis-1/2">
                      <app-input-field
                        name="country"
                        type="text"
                        label="Country"
                        placeholder="United States"
                        v-model="formData.country"
                        required
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
                      <app-radio-group name="paymentMethod" v-model="formData.paymentMethod">
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
                          v-model="formData.eMoneyNumber"
                          :disabled="formData.paymentMethod === 'cash'"
                        />
                      </app-col>
                      <app-col class="py-3 md:px-2 md:basis-1/2">
                        <app-input-field
                          name="e-money-pin"
                          label="e-Money Pin"
                          type="password"
                          placeholder="6578"
                          v-model="formData.eMoneyPin"
                          :disabled="formData.paymentMethod === 'cash'"
                        />
                      </app-col>
                    </app-grid>
                  </div>
                </fieldset>
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
                  <li
                    class="flex items-center justify-between"
                    v-for="record in carts"
                    :key="record.slug"
                  >
                    <div class="flex gap-4 items-center">
                      <app-card-with-image-centered
                        class="h-16 w-16 flex justify-center items-center p-2"
                        :image-mobile="record.image?.mobile"
                        :image-tablet="record.image?.tablet"
                        :image-desktop="record.image?.desktop"
                      />
                      <div>
                        <p class="font-bold text-[15px] leading-[25px] text-black-100 m-0">
                          {{ record.name }}
                        </p>
                        <small class="font-bold text-[14px] leading-[25px] text-black-100/50"
                          >${{ record.price }}</small
                        >
                      </div>
                    </div>
                    <span
                      class="font-bold text-[15px] leading-[25px] text-black-100 opacity-50 mix-blend-normal"
                      >x{{ record.quantity }}</span
                    >
                  </li>
                </ul>
                <ul class="flex flex-col gap-2 list-none mt-8">
                  <li class="flex items-center justify-between">
                    <p
                      class="mb-0 font-medium text-[15px] leading-[25px] text-black-100 opacity-50 uppercase"
                    >
                      Total
                    </p>
                    <p class="mb-0 font-bold text-[18px] leading-[25px] uppercase text-black-100">
                      ${{ totalPriceInCart }}
                    </p>
                  </li>
                  <li class="flex items-center justify-between">
                    <p
                      class="mb-0 font-medium text-[15px] leading-[25px] text-black-100 opacity-50 uppercase"
                    >
                      Shipping
                    </p>
                    <p class="mb-0 font-bold text-[18px] leading-[25px] uppercase text-black-100">
                      ${{ shippingCost }}
                    </p>
                  </li>
                  <li class="flex items-center justify-between">
                    <p
                      class="mb-0 font-medium text-[15px] leading-[25px] text-black-100 opacity-50 uppercase"
                    >
                      VAT (INCLUDED)
                    </p>
                    <p class="mb-0 font-bold text-[18px] leading-[25px] uppercase text-black-100">
                      ${{ vatCost }}
                    </p>
                  </li>
                  <li class="flex items-center justify-between mt-4">
                    <p
                      class="mb-0 font-medium text-[15px] leading-[25px] text-black-100 opacity-50 uppercase"
                    >
                      Grand Total
                    </p>
                    <p class="mb-0 font-bold text-[18px] leading-[25px] uppercase text-orange-100">
                      ${{ grandTotal }}
                    </p>
                  </li>
                  <li class="mt-8">
                    <app-button class="w-full text-center justify-center" type="submit"
                      >Continue & Pay</app-button
                    >
                  </li>
                </ul>
              </div>
            </app-col>
          </app-grid>
        </form>
      </div>
    </section>
  </app-page-loader>

  <app-modal :show="formSubmittedSuccessfully" class="modalClass">
    <div class="p-8 md:p-12 bg-white round-lg md:max-w-[540px] md:m-auto">
      <div
        class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 md:mb-8 text-white"
      >
        <app-icon width="26" height="21" icon="check" viewBox="0 0 26 21" color="none" />
      </div>
      <p
        class="font-bold text-2xl leading-7 tracking-[0.857143px] md:text-[32px] md:leading-[36px] md:tracking-[1.14286px;] uppercase text-black-100 mb-4 md:mb-6"
      >
        THANK YOU FOR YOUR ORDER
      </p>
      <p class="font-medium text-[15px] leading-[25px] text-black-100 opacity-50 mb-6 md:mb-8">
        You will receive an email confirmation shortly.
      </p>
      <div class="mb-6 md:mb-[46px] flex flex-col md:flex-row">
        <div
          class="p-6 rounded-t-lg md:rounded-l-lg md:rounded-tr-none bg-grey-100 flex items-center grow shrink"
        >
          <div class="w-full">
            <ul v-if="carts[0]" class="flex flex-col gap-6 max-h-60 list-none mb-3">
              <li class="flex items-center justify-between gap-42px">
                <div class="flex gap-4 items-center">
                  <app-card-with-image-centered
                    class="h-50px w-50px basis-50px flex justify-center items-center px-11px py-9px"
                    :image-mobile="carts[0].image?.mobile"
                    :image-tablet="carts[0].image?.tablet"
                    :image-desktop="carts[0].image?.desktop"
                  />
                  <div>
                    <p class="font-bold text-[15px] leading-[25px] text-black-100 m-0">
                      {{ carts[0].name }}
                    </p>
                    <small class="font-bold text-[14px] leading-[25px] text-black-100/50"
                      >${{ carts[0].price }}</small
                    >
                  </div>
                </div>
                <span
                  class="font-bold text-[15px] leading-[25px] text-black-100 opacity-50 mix-blend-normal"
                  >x{{ carts[0].quantity }}</span
                >
              </li>
            </ul>
            <div v-if="carts.length > 1">
              <!-- horizontal -->
              <div class="h-[1px] opacity-[0.08] bg-black-100 mb-3"></div>
              <p
                class="text-center font-bold text-xs tracking-[-0.214286px] opacity-50 text-black-100 mix-blend-normal"
              >
                and {{ carts.length - 1 }} other item(s)
              </p>
            </div>
          </div>
        </div>
        <div
          class="pt-4 px-6 pb-5 bg-black-100 rounded-b-lg md:rounded-r-lg md:rounded-bl-none flex items-center w-[198px]"
        >
          <div class="w-full">
            <p
              class="font-medium text-[15px] leading-[25px] text-white opacity-50 mix-blend-normal mb-2 uppercase"
            >
              Ground Total
            </p>
            <p class="text-white font-bold text-lg leading-[25px]">$ {{ grandTotal }}</p>
          </div>
        </div>
      </div>
      <app-button class="w-full text-center justify-center" type="button" @click="goToHomePage"
        >Back to Home</app-button
      >
    </div>
  </app-modal>
</template>
<style scoped>
.back-link {
  font-size: 15px;
  line-height: 25px;
}
.modalClass >>> .modalPositionClass {
  top: 50%;
  left: 50%;
  transform: translate3D(-50%, -50%, 0);
}
</style>
