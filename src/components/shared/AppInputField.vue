<script lang="ts">
// prevent inheritting attributes on root elements
export default {
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
import { defineProps, withDefaults, InputHTMLAttributes, Events } from 'vue';

// define component models
interface AppInputFieldProps extends Omit<InputHTMLAttributes, 'class'> {
  label?: string;
  name?: string;
  id?: string;
  modelValue?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  helperText?: string;
  hasError?: boolean;
  type?: string;
}

// set default props
withDefaults(defineProps<AppInputFieldProps>(), {
  label: undefined,
  name: '',
  id: '',
  ariaLabel: undefined,
  ariaLabelledby: undefined,
  helperText: undefined,
  modelValue: '',
  hasError: false,
  type: 'text',
});
const emit = defineEmits(['update:modelValue']);

const onInputChange = (event: Events['onInput']) => {
  const value = (event.target as HTMLInputElement).value;
  emit('update:modelValue', value);
};
</script>

<template>
  <div class="field relative">
    <label
      :for="id"
      class="label flex items-center justify-between w-full text-black-100 text-xs"
      :class="{
        visuallyhidden: label === '',
        'text-red': hasError,
      }"
    >
      <span class="text-inherit font-bold">
        {{ label }}
      </span>
      <span v-if="helperText" class="text-inherit font-medium">
        {{ helperText }}
      </span>
    </label>
    <input
      v-bind="$attrs"
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledby"
      :type="type"
      class="input relative block w-full border-0 rounded-lg bg-transparent ring-1 ring-inset ring-grey-80 font-bold text-black-100 placeholder:text-black-100 placeholder:opacity-40 placeholder:font-bold focus:ring-1 focus:ring-inset focus:ring-orange-100"
      :class="{
        'ring-red': hasError,
      }"
      :name="name"
      :id="id"
      :value="modelValue"
      @input="onInputChange"
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
  padding: 18px 24px 19px;
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
