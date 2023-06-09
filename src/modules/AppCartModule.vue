<script setup lang="ts">
import AppModal from '../components/shared/AppModal.vue';
import AppButton from '../components/shared/AppButton.vue';
import AppCardWithImageCentered from '../components/shared/cards/AppCardWithImageCentered.vue';
import AppNumberInput from '../components/shared/AppNumberInput.vue';

import useNavigations from '../hooks/useNavigations';
import { useCart, CartItemProp } from '../hooks/useCart';

const { pushToRoute } = useNavigations();
const { showCart, carts, totalPriceInCart, clearCart, onHideCart, onQuantityChangeInCart } =
  useCart();

const goToCheckoutpage = () => {
  onHideCart();
  pushToRoute({
    name: 'checkout',
  });
};
</script>
<template>
  <app-modal :show="showCart" class="modalClass" @hide="onHideCart">
    <div class="cart py-8 px-7 bg-white round-lg md:ml-auto">
      <div class="flex justify-between mb-[31px] xl:mb-8">
        <small class="cart__title uppercase text-black-100 font-bold">cart</small>
        <button
          type="button"
          class="cart__delete outline-0 font-medium border-0 text-black-100 opacity-50 underline mix-blend-normal"
          @click="clearCart"
        >
          Remove all
        </button>
      </div>
      <ul class="flex flex-col gap-6 max-h-60 list-none overflow-y-auto">
        <li class="flex items-center justify-between" v-for="record in carts" :key="record.slug">
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
              <small class="font-bold text-[14px] leading-[25px] text-black-100/50">{{
                record.price
              }}</small>
            </div>
          </div>
          <app-number-input
            class="py-[7px] px-[11.5px] gap-[12.5px]"
            :model-value="record.quantity"
            @update:model-value="(degree) => onQuantityChangeInCart(record as CartItemProp, degree)"
          />
        </li>
      </ul>
      <div class="mt-8 mb-6 flex justify-between">
        <small class="cart__total font-medium text-black-100 mix-blend-normal opacity-50 uppercase"
          >Total</small
        >
        <small class="cart__amount uppercase font-bold text-black-100"
          >$ {{ totalPriceInCart }}</small
        >
      </div>
      <app-button class="w-full text-center justify-center" @click="goToCheckoutpage"
        >Checkout</app-button
      >
    </div>
  </app-modal>
</template>
<style scoped>
/* deep nested selection */
.modalClass >>> .modalPositionClass {
  top: 114px;
  left: 50%;
  transform: translateX(-50%);
}
.cart__title {
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1.28571px;
}
.cart__delete {
  font-size: 15px;
  line-height: 25px;
}

.cart__total {
  font-size: 15px;
  line-height: 25px;
}
.cart__amount {
  font-size: 18px;
  line-height: 25px;
}

@media (min-width: 768px) {
  .cart {
    width: 377px;
  }
}

@media (min-width: 1440px) {
  .modalClass >>> .modalPositionClass {
    top: 129px;
  }
}
</style>
