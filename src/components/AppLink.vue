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
  <a
    class="links flex text-white font-bold uppercase m-0 hover:text-orange-100"
    :href="url"
    :target="target"
    :rel="rel"
    ><slot>{{ text }}</slot></a
  >
</template>
<style scoped>
.links {
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 2px;
  padding: 1.5px 17px;
}
</style>
