<script setup lang="ts">
import AppGrid from '../../../components/shared/AppGrid.vue';
import AppCol from '../../../components/shared/AppCol.vue';

interface AppCardProps {
  gutterX: number;
}

// set defaults props
withDefaults(defineProps<AppCardProps>(), {
  gutterX: 0,
});
</script>
<template>
  <app-grid>
    <app-col>
      <slot name="first"></slot>
    </app-col>
    <app-col>
      <slot name="second"></slot>
    </app-col>
  </app-grid>
</template>
