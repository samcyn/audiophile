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
  toRefs,
} from 'vue';
import useControlled from '../hooks/useControlled';

// define component models
interface AppInputNumberProps
  extends Omit<InputHTMLAttributes, 'class'> {
  name?: string;
  id?: string;
  modelValue?: number | string;
  min?: number;
  max?: number;
  ariaLabel?: string;
  ariaLabelledby?: string;
  helperText?: string;
  hasError?: boolean;
}

// set default props
const props = withDefaults(
  defineProps<AppInputNumberProps>(),
  {
    label: undefined,
    name: '',
    id: '',
    ariaLabel: undefined,
    ariaLabelledby: undefined,
    helperText: undefined,
    modelValue: undefined,
    min: 0,
    max: 10,
    hasError: false,
  }
);
const emit = defineEmits(['update:modelValue']);

const { modelValue, min } = toRefs(props);

const [realVal, setRealVal] = useControlled(
  modelValue,
  min
);

const onInputChange = (degree: string) => {
  const currentModelValue = Number(realVal.value);

  if (degree === 'INCREMENT') {
    if (currentModelValue < props.max) {
      if (props.modelValue !== undefined) {
        emit(
          'update:modelValue',
          currentModelValue + 1
        );
      } else {
        setRealVal(currentModelValue + 1);
      }
    }
    return;
  }
  if (currentModelValue > props.min) {
    if (props.modelValue !== undefined) {
      emit(
        'update:modelValue',
        currentModelValue - 1
      );
    } else {
      setRealVal(currentModelValue - 1);
    }
  }
};
</script>

<template>
  <div class="field relative">
    <label :for="id" class="visuallyhidden">
    </label>
    <input
      v-bind="$attrs"
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledby"
      type="number"
      class="visuallyhidden"
      :name="name"
      :id="id"
      :value="realVal"
    />
    <div
      role="presentation"
      class="field__wrap flex items-center justify-between bg-grey-100 gap-5 border-0"
    >
      <button
        type="button"
        class="field__button w-6 inline-flex items-center justify-center p-1 rounded-full text-black-100/25 hover:text-orange-100 transition-colors font-bold"
        :class="{
          'cursor-not-allowed': realVal === min,
        }"
        :disabled="realVal === min"
        @click="
          ($event) => onInputChange('DECREMENT')
        "
      >
        -
      </button>
      <span
        role="presentation"
        class="field__button min-w-[24px] inline-flex items-center justify-center p-1 text-black-100 font-bold"
        >{{ realVal }}</span
      >
      <button
        type="button"
        class="field__button w-6 inline-flex items-center justify-center p-1 rounded-full text-black-100/25 hover:text-orange-100 transition-colors font-bold"
        :disabled="realVal === max"
        :class="{
          'cursor-not-allowed': realVal === max,
        }"
        @click="
          ($event) => onInputChange('INCREMENT')
        "
      >
        +
      </button>
    </div>
  </div>
</template>

<style scoped>
.field__wrap {
  padding: 11px 11.5px;
}

.field__button {
  /* height: 18px; */
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
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
