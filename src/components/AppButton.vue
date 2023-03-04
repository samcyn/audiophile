<script setup lang="ts">
import { defineProps, withDefaults, computed } from 'vue';

interface AppButtonProps {
  variant?: 'contained' | 'text' | 'outlined';
  color?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

const props = withDefaults(defineProps<AppButtonProps>(), {
  className: '',
  variant: 'contained',
  color: 'primary',
  onClick: () => ({}),
});

const classComputed = computed<string>(() => {
  const variant = props.variant;
  // const color = props.color;
  let className = 'rounded-none transition ';
  if (variant === 'contained') {
    className += 'bg-orange-100 text-white hover:bg-orange-90';
  }
  if (variant === 'outlined') {
    className +=
      'bg-transparent hover:bg-black-100 border border-black-100 text-black-100 hover:text-white';
  }
  if (variant === 'text') {
    className +=
      'border-0 bg-none text-black-100 opacity-50 hover:text-orange-100 hover:opacity-100';
  }
  return `${className} ${props.className}`;
});
</script>

<template>
  <button class="button" :class="classComputed">
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
  padding: 15px 29.5px 15px 31.5px;
  border-radius: 0;
  outline: 0;
  cursor: pointer;
}
</style>
