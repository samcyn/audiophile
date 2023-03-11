<script setup lang="ts">
import {
  defineProps,
  withDefaults,
  AnchorHTMLAttributes,
} from 'vue';

// define components models
interface AppLinkProps
  extends AnchorHTMLAttributes {
  text?: string;
  url: string;
}

// set defaults props
withDefaults(defineProps<AppLinkProps>(), {
  text: '',
});
</script>
<template>
  <a :href="url" :target="target" :rel="rel"
    ><slot>{{ text }}</slot></a
  >
</template>
