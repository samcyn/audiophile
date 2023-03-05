<script lang="ts">
  // prevent inheritting attributes on root elements
  export default {
    inheritAttrs:
      false,
  };
</script>
<script setup lang="ts">
  import {
    defineProps,
    withDefaults,
    computed,
    InputHTMLAttributes,
    useAttrs,
  } from 'vue';

  // define component models
  interface AppInputFieldProps extends Omit<InputHTMLAttributes, 'class'> {
    variant?: 'contained' | 'text' | 'outlined';
    label?: string;
    name?: string;
    id?: string;
    value?: string;
    ariaLabel?: string;
    ariaLabelledby?: string;
    helperText?: string;
  }

  // set default props
  const props = withDefaults(defineProps<AppInputFieldProps>(), {
    variant: 'contained',
    label: undefined,
    name: '',
    id: '',
    value: '',
    ariaLabel: undefined,
    ariaLabelledby: undefined,
    helperText: undefined,
  });

  // pick attributes
  const attrs = useAttrs();

  const classComputed = computed<string>(() => {
    const variant = props.variant;
    let className = 'rounded-none transition ';
    if (variant === 'contained') {
      className += 'bg-orange-100 text-white hover:bg-orange-90';
    }
    if (variant === 'outlined') {
      className += 'bg-transparent hover:bg-black-100 border border-black-100 text-black-100 hover:text-white';
    }
    if (variant === 'text') {
      className += 'border-0 bg-none text-black-100 opacity-50 hover:text-orange-100 hover:opacity-100';
    }
    return `${className} ${attrs.class}`;
  });
</script>

<template>
  <div class="field relative">
    <label 
      :for="id" 
      class="label inline-flex items-center justify-between text-black-100 text-xs font-bold" 
      :class="{
        visuallyhidden: label === '',
      }"
    >
      <span class="text-inherit">
        {{ label }}
      </span>
      <span
        v-if="helperText" 
        class="text-inherit">
        {{ helperText }}
      </span>
    </label>
    <input 
      :aria-label="ariaLabel" 
      :aria-labelledby="ariaLabelledby" 
      type="text"
      class="
        input
        relative 
        block 
        w-full 
        border-0 
        rounded-lg
        bg-transparent
        ring-1 
        ring-inset 
        ring-grey-80 
        font-bold
        text-black-100 
        placeholder:text-black-100
        placeholder:opacity-40
        placeholder:font-bold
        focus:ring-1 
        focus:ring-inset 
        focus:ring-orange-100 
      "
      :name="name" 
      :id="id" 
      :value="value" 
      v-bind="$attrs" 
    />
  </div>
</template>

<style scoped>
  .label {
    font-style: normal;
    letter-spacing: -0.214286px;
    margin-bottom: 9px;
  }

  .input {
    font-style: normal;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.25px;
    mix-blend-mode: normal;
    padding: 17px 23px 18px;
    outline: 0;
  }

  .input::placeholder {
    font-style: normal;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.25px;
    mix-blend-mode: normal;
  }

  .input.error {
    border: 2px solid #cd2c2c;
  }

  .visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
</style>
