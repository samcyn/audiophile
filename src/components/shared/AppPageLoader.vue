<script setup lang="ts">
interface Props {
  loading: boolean;
}

// set default props
withDefaults(defineProps<Props>(), {
  loading: false,
});
</script>
<template>
  <div class="relative">
    <div
      class="absolute inset-0 w-full h-full z-[100] bg-white/75 flex justify-center py-50"
      v-if="loading"
    >
      <div class="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<style scoped>
.loader {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.loader div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #000;
  border-radius: 50%;
  animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #000 transparent transparent transparent;
}
.loader div:nth-child(1) {
  animation-delay: -0.45s;
}
.loader div:nth-child(2) {
  animation-delay: -0.3s;
}
.loader div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
