<script setup lang="ts">
import AppIcon from '../shared/AppIcon.vue';
import AppLink from '../shared/AppLink.vue';
</script>
<template>
  <app-link
    class="text-white transition p-0 mr-0 inline-flex items-center hover:text-orange-100"
    to="/"
    aria-label="audioPhile"
  >
    <app-icon icon="logo" width="143" height="25" />
  </app-link>
</template>
