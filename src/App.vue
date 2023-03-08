<script setup lang="ts">
import { ref } from 'vue';
import AppNumberInput from './components/AppNumberInput.vue';

const firstName = ref(2);
</script>

<template>
  <app-number-input v-model="firstName" />
</template>

<style scoped></style>
