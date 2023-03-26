<script lang="ts">
// prevent inheritting attributes on root elements
export default {
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
import { InputHTMLAttributes, defineProps, defineEmits, withDefaults } from 'vue';
import {
  useRadio,
  /** // AppRadioProps,
   * https://github.com/vuejs/core/issues/4294
   * can't for now import interface in vue3 component
   * it's a bit redundant but hopefully this get resolve
   */
} from '../../hooks/useRadio';

// define component models
interface AppRadioProps extends Omit<InputHTMLAttributes, 'class'> {
  label?: string;
  name?: string;
  id?: string;
  value: string | number | boolean;
  modelValue?: string | number | boolean;
  ariaLabel?: string;
  ariaLabelledby?: string;
  helperText?: string;
  hasError?: boolean;
}

// set default props
const props = withDefaults(defineProps<AppRadioProps>(), {
  label: undefined,
  name: '',
  id: '',
  ariaLabel: undefined,
  ariaLabelledby: undefined,
  helperText: undefined,
  hasError: false,
  modelValue: undefined,
  value: undefined,
});
const emit = defineEmits(['update:modelValue']);

const {
  name,
  onChange,
  value,
  label,
  checked: computedChekced,
  id: computedId,
  disabled,
} = useRadio(props, emit);
</script>

<template>
  <label
    class="label cursor-pointer relative flex items-center ring-1 ring-inset ring-grey-80 rounded-lg bg-transparent border-0 overflow-hidden hover:ring-1 hover:ring-inset hover:ring-orange-100"
    focusable
    :class="{
      'ring-orange-100': computedChekced,
    }"
  >
    <input
      v-bind="$attrs"
      class="top-0 left-0 right-0 bottom-0 w-full cursor-pointer h-full m-0 opacity-0 p-0 z-[1] absolute"
      :name="name"
      type="radio"
      :id="computedId"
      :value="value"
      role="radio"
      :checked="computedChekced"
      :aria-checked="computedChekced"
      :disabled="disabled"
      @change="onChange"
    />
    <!-- contents -->
    <span class="inline-flex items-center" :aria-disabled="disabled">
      <!-- circle -->
      <span
        class="w-5 h-5 flex items-center justify-center ring-1 ring-inset ring-grey-80 rounded-full mr-4"
      >
        <!-- inner circle -->
        <span
          class="w-2.5 h-2.5 bg-orange-100 inline-block rounded-full transition scale-0"
          :class="{
            'scale-100': computedChekced,
          }"
          :aria-hidden="!computedChekced"
        ></span>
      </span>
      <!-- text -->
      <span v-if="label" :aria-hidden="!label" class="labelText font-bold text-black-100">{{
        label
      }}</span>
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
