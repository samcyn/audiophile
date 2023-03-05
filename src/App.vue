<script setup lang="ts">
import { ref } from 'vue';
import AppButton from './components/AppButton.vue';
import AppInputField from './components/AppInputField.vue';

const firstName = ref('2');
</script>

<template>
  <AppButton variant="text"
    >See Product {{ firstName }}</AppButton
  >
  <AppInputField
    placeholder="Hello"
    label="First Name"
    name="First name"
    v-model="firstName"
    class="uuuu"
  />
</template>

<style scoped></style>
