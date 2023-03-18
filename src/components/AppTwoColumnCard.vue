<script setup lang="ts"></script>
<template>
  <div
    class="flex flex-col lg:flex-row lg:justify-between lg:items-center"
  >
    <div>
      <slot name="first"></slot>
    </div>
    <div>
      <slot name="second"></slot>
    </div>
  </div>
</template>
<style scoped></style>
