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
  InputHTMLAttributes,
  Events,
} from 'vue';

// define component models
interface AppRadioProps
  extends Omit<InputHTMLAttributes, 'class'> {
  label?: string;
  name?: string;
  id?: string;
  modelValue?: boolean;
  ariaLabel?: string;
  ariaLabelledby?: string;
  helperText?: string;
  hasError?: boolean;
}

// set default props
withDefaults(defineProps<AppRadioProps>(), {
  label: undefined,
  name: '',
  id: '',
  ariaLabel: undefined,
  ariaLabelledby: undefined,
  helperText: undefined,
  modelValue: false,
  hasError: false,
});
const emit = defineEmits(['update:modelValue']);

const onInputChange = (
  event: Events['onChange']
) => {
  const value = (event.target as HTMLInputElement)
    .checked;
  emit('update:modelValue', value);
};
</script>

<template>
  <label
    class="label cursor-pointer relative flex items-center ring-1 ring-inset ring-grey-80 rounded-lg bg-transparent border-0 overflow-hidden hover:ring-1 hover:ring-inset hover:ring-orange-100"
    focusable
    :class="{
      'ring-orange-100': modelValue,
    }"
  >
    <input
      v-bind="$attrs"
      class="top-0 left-0 right-0 bottom-0 w-full cursor-pointer h-full m-0 opacity-0 p-0 z-[1] absolute"
      :name="name"
      type="radio"
      :value="label"
      :id="id"
      :checked="modelValue"
      @change="onInputChange"
    />
    <!-- contents -->
    <span
      class="inline-flex items-center"
      aria-disabled="false"
    >
      <!-- circle -->
      <span
        class="w-5 h-5 flex items-center justify-center ring-1 ring-inset ring-grey-80 rounded-full mr-4"
      >
        <!-- inner circle -->
        <span
          class="w-2.5 h-2.5 bg-orange-100 inline-block rounded-full transition scale-0"
          :class="{
            'scale-100': modelValue,
          }"
        ></span>
      </span>
      <!-- text -->
      <span
        v-if="label"
        class="labelText font-bold text-black-100"
        >{{ label }}</span
      >
    </span>
  </label>
</template>
<style scoped>
.label {
  padding: 18px 16px;
}
.labelText {
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.25px;
}
</style>
