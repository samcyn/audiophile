import { computed, ComputedRef, inject, provide, ref, Ref } from 'vue';
import type { InjectionKey } from 'vue';

export type CartItemProp = {
  slug: string;
  price: number;
  name: string;
  image?: string;
  quantity: number;
};

type INJECT_KEY_PROP = {
  carts: Ref<CartItemProp[]>;
  totalPriceInCart: ComputedRef<number>;
  addToCart: (record: CartItemProp) => void;
  removeAnItemFromCart: (slug: string) => void;
  clearCart: () => void;
  onQuantityChangeInCart: (record: CartItemProp, quantity: number) => void;
};

const INJECT_KEY = Symbol() as InjectionKey<INJECT_KEY_PROP>;

export const CartProvider = () => {
  const carts = ref<CartItemProp[]>([
    {
      name: 'herroes',
      price: 677,
      quantity: 12,
      slug: '23ssdff',
    },
  ]);

  const addToCart = (record: CartItemProp) => {
    const items = carts.value;
    const existingItemIndex = items.findIndex((cartItem) => cartItem.slug === record.slug);

    if (existingItemIndex !== -1) {
      items[existingItemIndex].quantity += record.quantity;
    } else {
      items.unshift(record);
    }
    carts.value = items;
  };

  const removeAnItemFromCart = (slug: string) => {
    const items = carts.value;
    const newRecords = items.filter((item) => item.slug !== slug);
    carts.value = newRecords;
  };

  const clearCart = () => {
    carts.value = [];
  };

  const onQuantityChangeInCart = (record: CartItemProp, quantity: number) => {
    const items = carts.value;
    const existingItemIndex = items.findIndex((cartItem) => cartItem.slug === record.slug);

    if (existingItemIndex !== -1) {
      items[existingItemIndex].quantity = quantity;
    }
    carts.value = items;
  };

  const totalPriceInCart = computed(() => {
    const items = carts.value;
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  });

  // set providers keys to all children
  provide<INJECT_KEY_PROP>(INJECT_KEY, {
    carts,
    totalPriceInCart,
    addToCart,
    removeAnItemFromCart,
    clearCart,
    onQuantityChangeInCart,
  });
};

export const useCart = (): INJECT_KEY_PROP => {
  const cartContext = inject<INJECT_KEY_PROP>(INJECT_KEY);
  if (!cartContext) {
    throw new Error("USE CART IS USED OUTSIDE IT'S PROVIDER");
  }
  return cartContext;
};
