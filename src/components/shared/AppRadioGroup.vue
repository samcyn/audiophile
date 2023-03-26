<script lang="ts">
// prevent inheritting attributes on root elements
export default {
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
import { useRadioGroup, AppRadioProps } from '../../hooks/useRadio';
import AppRadio from /** // AppRadioGroupProps
 * https://github.com/vuejs/core/issues/4294
 * can't for now import interface in vue3 component
 * it's a bit redundant but hopefully this get resolve
 */ './AppRadio.vue';

type AppRadioGroupProps = {
  label?: string;
  name: string;
  modelValue?: string | number | boolean;
  disabled?: boolean;
  options?: AppRadioProps[];
  defaultValue?: string | number | boolean;
};

const props = withDefaults(defineProps<AppRadioGroupProps>(), {
  label: undefined,
  name: '',
  modelValue: undefined,
  disabled: false,
  options: undefined,
  defaultValue: undefined,
});
const emit = defineEmits(['update:modelValue']);

useRadioGroup(props, emit);
</script>
<template>
  <div role="radiogroup">
    <slot>
      <!-- use options if slot not provided -->
      <AppRadio v-for="option in options" :key="option.label" v-bind="option" />
    </slot>
  </div>
</template>
