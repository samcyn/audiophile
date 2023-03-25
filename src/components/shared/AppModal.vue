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
  toRefs,
  Events,
} from 'vue';

// define component models
interface Props {
  show?: boolean;
  ariaLabel?: string;
  ariaLabelledby?: string;
  defaultValue?: boolean;
  modalPositionClass?: string;
}

// set default props
const props = withDefaults(defineProps<Props>(), {
  show: false,
  ariaLabel: undefined,
  ariaLabelledby: undefined,
  modalPositionClass:
    'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
});
const emit = defineEmits(['hide']);

const { show } = toRefs(props);

const onClose = (event: Events['onClick']) => {
  // click outside logic...
  const nonActive = (event.target as HTMLElement)
    .dataset.nonActive;
  if (nonActive) {
    emit('hide', false);
  }
};
</script>
<template>
  <div
    v-if="show"
    role="presentation"
    aria-labelledby="ariaLabelledby"
    aria-describedby="ariaDescribedby"
    class="fixed z-[1000] inset-0"
    @click="onClose"
  >
    <div
      aria-hidden="true"
      class="fixed inset-0 flex justify-center items-center bg-black-100/40 opacity-100 transition-opacity"
      data-non-active="true"
    ></div>
    <div
      class="container absolute opacity-100"
      :class="modalPositionClass"
      data-non-active="true"
      tabindex="-1"
    >
      <slot>
        <div class="p-20 bg-white">
          <h1>HELLO</h1>
        </div>
      </slot>
    </div>
  </div>
</template>
