<script lang="ts">
// prevent inheritting attributes on root elements
export default {
  inheritAttrs: false,
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
    className +=
      'bg-transparent hover:bg-black-100 border border-black-100 text-black-100 hover:text-white';
  }
  if (variant === 'text') {
    className +=
      'border-0 bg-none text-black-100 opacity-50 hover:text-orange-100 hover:opacity-100';
  }
  return `${className} ${attrs.class}`;
});
</script>

<template>
  <div class="field">
    <label :for="id" class="label" :class="{ visuallyhidden: label === '' }">
      <span>
        {{ label }}
      </span>
      <span v-if="helperText">{{ helperText }}</span>
    </label>
    <input
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledby"
      type="text"
      class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      :name="name"
      :id="id"
      :value="value"
      v-bind="$attrs"
    />
  </div>
</template>

<style scoped>
.field {
  position: relative;
}
.label {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.214286px;
  margin-bottom: 9px;
  color: #000000;
}

.label span {
  color: inherit;
}

.input {
  background: #ffffff;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.25px;
  mix-blend-mode: normal;
  padding: 17px 23px 18px;
  width: 100%;
  outline: 0;
}
.input::placeholder {
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.25px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.4;
}
.input:active,
.input:focus,
.input:hover {
  border: 1px solid #d87d4a;
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
