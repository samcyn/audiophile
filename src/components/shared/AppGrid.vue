<script setup lang="ts">
// import { useGridRow } from '../../hooks/useGrid';

// type AppGridRowProps = {
//   gutterX?: number;
//   gutterY?: number;
// };

// const props = withDefaults(
//   defineProps<AppGridRowProps>(),
//   {
//     gutterX: 0,
//     gutterY: 0,
//   }
// );

// const { rowStyles } = useGridRow(props);
</script>
<template>
  <div class="flex flex-wrap">
    <slot></slot>
  </div>
</template>
