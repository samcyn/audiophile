<script setup lang="ts">
import {
  defineProps,
  withDefaults,
  computed,
  ButtonHTMLAttributes,
  useAttrs,
} from 'vue';

// define components models
interface AppButtonProps
  extends ButtonHTMLAttributes {
  variant?: 'contained' | 'text' | 'outlined';
  buttonType?:
    | 'primary'
    | 'secondary'
    | 'default';
}

// set defaults props
const props = withDefaults(
  defineProps<AppButtonProps>(),
  {
    variant: 'contained',
    buttonType: 'primary',
  }
);

// pick attrs
const attrs = useAttrs();

// compute classes base on variant type
const classComputed = computed<string>(() => {
  const variant = props.variant;
  const buttonType = props.buttonType;
  let className =
    'rounded-none transition inline-flex items-center ';
  if (variant === 'contained') {
    if (buttonType === 'primary') {
      className +=
        'bg-orange-100 text-white hover:bg-orange-90';
    } else if (buttonType === 'secondary') {
      className +=
        'bg-black-100 text-white hover:bg-black-90';
    } else {
      className +=
        'bg-grey-100 text-white hover:bg-grey-90';
    }
  }
  if (variant === 'outlined') {
    if (buttonType === 'primary') {
      className +=
        'bg-transparent hover:bg-orange-100 ring ring-orange-100 ring-inset text-black-100 hover:text-white';
    } else if (buttonType === 'secondary') {
      className +=
        'bg-transparent hover:bg-black-100 ring ring-black-100 ring-inset text-black-100 hover:text-white';
    } else {
      className +=
        'bg-transparent hover:bg-grey-100 ring ring-grey-100 ring-inset text-black-100 hover:text-black-100';
    }
  }
  if (variant === 'text') {
    if (buttonType === 'primary') {
      className +=
        'border-0 bg-none text-orange-100 opacity-50 hover:text-black-100 hover:opacity-100';
    } else if (buttonType === 'secondary') {
      className +=
        'border-0 bg-none text-black-100 opacity-50 hover:text-orange-100 hover:opacity-100';
    } else {
      className +=
        'border-0 bg-none text-grey-100 opacity-50 hover:text-black-100 hover:opacity-100';
    }
  }
  return `${className} ${attrs.class || ''}`;
});
</script>

<template>
  <button
    class="button"
    :class="classComputed"
    type="button"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 15px 29px 15px 31px;
  border-radius: 0;
  outline: 0;
  cursor: pointer;
}
</style>
