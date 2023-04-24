import { computed, ComputedRef, inject, provide, ref, Ref } from 'vue';
import type { InjectionKey } from 'vue';
import { numToDp } from '../utils/format';

export type CartItemProp = {
  slug: string;
  price: number;
  name: string;
  image?: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  quantity: number;
};

type INJECT_KEY_PROP = {
  showCart: Ref<boolean>;
  carts: Ref<CartItemProp[]>;
  totalPriceInCart: ComputedRef<number>;
  currentLocalStateProduct: Ref<CartItemProp>;
  shippingCost: ComputedRef<number>;
  vatCost: ComputedRef<number>;
  grandTotal: ComputedRef<number>;
  addToCart: () => void;
  removeAnItemFromCart: (slug: string) => void;
  clearCart: () => void;
  onQuantityChangeInCart: (record: CartItemProp, quantity: number) => void;
  updateCurrentProduct: (product?: CartItemProp) => void;
  onHideCart: () => void;
  onShowCart: () => void;
};

const INJECT_KEY = Symbol() as InjectionKey<INJECT_KEY_PROP>;
const SHIPPING_PERCENTAGE = 0.15; // 50%
const VAT_PERCENTAGE = 0.05; // 20%

export const CartProvider = () => {
  const showCart = ref(false);

  const carts = ref<CartItemProp[]>([]);

  // this value hold the local state value, it's used to sync local state with cart state values
  const currentLocalStateProduct = ref<CartItemProp>({
    name: '',
    quantity: 0,
    price: 0,
    slug: 'xxx',
  });

  const addToCart = () => {
    const record = currentLocalStateProduct.value;
    // get items in cart
    const items = carts.value;
    // find if item exist in cart
    const existingItemIndex = items.findIndex((cartItem) => cartItem.slug === record.slug);
    // if it does exist in cart, increase the quantity added
    if (existingItemIndex !== -1) {
      items[existingItemIndex].quantity = record.quantity;
    } else {
      items.unshift(record); // add a new item for the first time
    }
    // update cart value
    carts.value = items;

    // show cart to user
    showCart.value = true;
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
    currentLocalStateProduct.value = {
      ...currentLocalStateProduct.value,
      quantity: 0,
    };
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
      // update cart
      carts.value = items;
    }
    // update local state;
    if (currentLocalStateProduct.value.slug === record.slug) {
      currentLocalStateProduct.value = {
        ...currentLocalStateProduct.value,
        quantity,
      };
    }
  };

  const totalPriceInCart = computed(() => {
    const items = carts.value;
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  });

  const shippingCost = computed(() => numToDp(totalPriceInCart.value * SHIPPING_PERCENTAGE));
  const vatCost = computed(() => numToDp(totalPriceInCart.value * VAT_PERCENTAGE));
  const grandTotal = computed(() =>
    numToDp(totalPriceInCart.value + vatCost.value + shippingCost.value)
  );

  const updateCurrentProduct = (product?: CartItemProp) => {
    if (product) {
      const currentProduct = carts.value.find((item) => item.slug === product.slug);
      if (currentProduct) {
        currentLocalStateProduct.value = currentProduct;
      } else {
        currentLocalStateProduct.value = {
          ...product,
          quantity: product.quantity || 0,
        };
      }
    }
  };

  const onShowCart = () => {
    showCart.value = true;
  };

  const onHideCart = () => {
    showCart.value = false;
  };

  // set providers keys to all children
  provide<INJECT_KEY_PROP>(INJECT_KEY, {
    showCart,
    carts,
    totalPriceInCart,
    currentLocalStateProduct,
    shippingCost,
    vatCost,
    grandTotal,
    addToCart,
    removeAnItemFromCart,
    clearCart,
    onQuantityChangeInCart,
    updateCurrentProduct,
    onHideCart,
    onShowCart,
  });
};

export const useCart = (): INJECT_KEY_PROP => {
  const cartContext = inject<INJECT_KEY_PROP>(INJECT_KEY);
  if (!cartContext) {
    throw new Error("USE CART IS USED OUTSIDE IT'S PROVIDER");
  }
  return cartContext;
};
