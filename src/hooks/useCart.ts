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
  currentItemQuantity: Ref<number>;
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
  // this value hold the local state value
  const currentItemQuantity = ref(0);

  const addToCart = (record: CartItemProp) => {
    // get items in cart
    const items = carts.value;
    // find if item exist in cart
    const existingItemIndex = items.findIndex((cartItem) => cartItem.slug === record.slug);
    // if it does exist in cart, increase the quantity added
    if (existingItemIndex !== -1) {
      items[existingItemIndex].quantity += record.quantity;
    } else {
      items.unshift(record); // add a new item for the first time
    }
    // update cart value
    carts.value = items;
  };

  const removeAnItemFromCart = (slug: string) => {
    // get cart items
    const items = carts.value;
    // filter out current slug
    const newRecords = items.filter((item) => item.slug !== slug);
    // update cart value
    carts.value = newRecords;
  };

  const clearCart = () => {
    carts.value = [];
  };

  // quantity change in two ways, from the cart or from the local form
  const onQuantityChangeInCart = (record: CartItemProp, quantity: number) => {
    // get cart
    const items = carts.value;
    // check if item exist in cart
    const existingItemIndex = items.findIndex((cartItem) => cartItem.slug === record.slug);
    // if it does increase the quantity
    if (existingItemIndex !== -1) {
      items[existingItemIndex].quantity = quantity;
    }
    // update cart
    carts.value = items;
  };

  const totalPriceInCart = computed(() => {
    const items = carts.value;
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  });

  // set providers keys to all children
  provide<INJECT_KEY_PROP>(INJECT_KEY, {
    currentItemQuantity,
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
