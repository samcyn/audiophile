<script setup lang="ts">
import { watch } from 'vue';

import AppNumberInput from '../shared/AppNumberInput.vue';
import AppButton from '../shared/AppButton.vue';

import { useCart, CartItemProp } from '../../hooks/useCart';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  product: Record<string, any>;
}

const props = withDefaults(defineProps<Props>(), {});

const { currentLocalStateProduct, addToCart, onQuantityChangeInCart, updateCurrentProduct } =
  useCart();

// update the current product in this page
watch(
  () => props.product.slug,
  () => updateCurrentProduct(props.product as CartItemProp)
);
</script>
<template>
  <div class="flex items-center gap-4">
    <app-number-input
      class="py-15px px-[15.5px] gap-[20.5px]"
      id="shdhdhd"
      name="here"
      :model-value="currentLocalStateProduct.quantity"
      @update:model-value="(degree) => onQuantityChangeInCart(product as CartItemProp, degree)"
    />
    <!-- cart module right here -->
    <app-button @click="addToCart">Add to cart</app-button>
  </div>
</template>
