<script setup lang="ts">
import { ref } from 'vue';
import AppButton from './components/AppButton.vue';
import AppInputField from './components/AppInputField.vue';
import AppRadio from './components/AppRadio.vue';
import AppRadioGroup from './components/AppRadioGroup.vue';

const firstName = ref('2');
const hire = ref('hire me');
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
  <AppRadioGroup
    name="testing"
    :disabled="false"
    :options="[
      {
        label: 'hire me',
        value: 'hire me',
      },
      {
        label: 'Hire me 2',
        value: 'hire me 2',
      },
    ]"
  >
    <AppRadio label="Hire Me" value="hire me" />
    <AppRadio
      label="Hire Me 2"
      value="hire me 2"
    />
  </AppRadioGroup>
  <AppRadio
    v-model="hire"
    label="Hire Me"
    value="hire me"
    name="her"
  />
  <AppRadio
    v-model="hire"
    label="Hire Me 2"
    value="hire me 2"
    name="her"
  />
</template>

<style scoped></style>
