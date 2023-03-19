<script setup lang="ts">
// import { useGridCol } from '../../hooks/useGrid';

// type AppGridColProps = {
//   span?:
//     | 0
//     | 2
//     | 1
//     | 3
//     | 4
//     | 5
//     | 6
//     | 7
//     | 8
//     | 9
//     | 10
//     | 11
//     | 12;
//   xs?:
//     | 0
//     | 2
//     | 1
//     | 3
//     | 4
//     | 5
//     | 6
//     | 7
//     | 8
//     | 9
//     | 10
//     | 11
//     | 12;
//   sm?:
//     | 0
//     | 2
//     | 1
//     | 3
//     | 4
//     | 5
//     | 6
//     | 7
//     | 8
//     | 9
//     | 10
//     | 11
//     | 12;
//   md?:
//     | 0
//     | 2
//     | 1
//     | 3
//     | 4
//     | 5
//     | 6
//     | 7
//     | 8
//     | 9
//     | 10
//     | 11
//     | 12;
//   lg?:
//     | 0
//     | 2
//     | 1
//     | 3
//     | 4
//     | 5
//     | 6
//     | 7
//     | 8
//     | 9
//     | 10
//     | 11
//     | 12;
//   xl?:
//     | 0
//     | 2
//     | 1
//     | 3
//     | 4
//     | 5
//     | 6
//     | 7
//     | 8
//     | 9
//     | 10
//     | 11
//     | 12;
//   xxl?:
//     | 0
//     | 2
//     | 1
//     | 3
//     | 4
//     | 5
//     | 6
//     | 7
//     | 8
//     | 9
//     | 10
//     | 11
//     | 12;
// };

// const props = withDefaults(
//   defineProps<AppGridColProps>(),
//   {
//     span: 0,
//     xs: 0,
//     sm: 0,
//     md: 0,
//     lg: 0,
//     xl: 0,
//     xxl: 0,
//   }
// );

// const { colStyles, classes } = useGridCol(props);
</script>
<template>
  <div class="basis-full px-[5px] lg:px-[15px]">
    <slot></slot>
  </div>
</template>
<style scoped></style>
