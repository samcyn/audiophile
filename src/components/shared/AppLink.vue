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
  target?: string;
  rel?: string;
}

// set defaults props
withDefaults(defineProps<AppLinkProps>(), {
  text: '',
  target: '',
  rel: '',
});
</script>
<template>
  <!-- <a :href="url" :target="target" :rel="rel"
    ><slot>{{ text }}</slot></a
  > -->
  <router-link :to="url"><slot /></router-link>
</template>
