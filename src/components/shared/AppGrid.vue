<script setup lang="ts">
import { useGridRow } from '../../hooks/useGrid';

type AppGridRowProps = {
  gutterX?: number;
  gutterY?: number;
  rowReverse?: boolean;
};

const props = withDefaults(
  defineProps<AppGridRowProps>(),
  {
    gutterX: 0,
    gutterY: 0,
    rowReverse: false,
  }
);

const { rowStyles } = useGridRow(props);
</script>
<template>
  <div class="rows" :style="rowStyles">
    <slot></slot>
  </div>
</template>
<style scoped>
.rows {
  display: flex;
  flex-wrap: wrap;
}
</style>
