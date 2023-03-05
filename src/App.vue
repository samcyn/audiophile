<script setup lang="ts">
import { ref } from 'vue';
import AppButton from './components/AppButton.vue';
import AppInputField from './components/AppInputField.vue';
import AppRadio from './components/AppRadio.vue';

const firstName = ref('2');
const hire = ref(false);
</script>

<template>
  <AppButton variant="text"
    >See Product {{ firstName }} -
    {{ hire }}</AppButton
  >
  <AppInputField
    placeholder="Hello"
    label="First Name"
    name="First name"
    v-model="firstName"
    class="uuuu"
  />
  <AppRadio v-model="hire" label="Hire Me" />
</template>

<style scoped></style>
