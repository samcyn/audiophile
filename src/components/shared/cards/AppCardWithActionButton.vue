<script setup lang="ts">
import AppButton from '../AppButton.vue';
import useNavigations from '../../../hooks/useNavigations';

interface AppCardProps {
  slug: string;
  title?: string;
}

// set defaults props
const props = withDefaults(
  defineProps<AppCardProps>(),
  {
    title: 'YX1 EARPHONES',
  }
);

const { pushToRoute } = useNavigations();

const onClick = () => {
  pushToRoute({
    name: 'earphones-detailed',
    params: { id: props.slug },
  });
};
</script>
<template>
  <div
    class="card w-full bg-grey-100 relative rounded-lg overflow-hidden"
  >
    <div class="card__body flex items-center">
      <div>
        <slot name="title">
          <h3
            v-if="title"
            class="card__title font-bold mb-8 text-black-100 uppercase"
          >
            {{ title }}
          </h3>
        </slot>
        <app-button
          variant="outlined"
          button-type="secondary"
          @click="onClick"
          >SEE PRODUCT</app-button
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
.card__body {
  padding: 41px 24px;
}
.card__title {
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
}

@media (min-width: 768px) {
  .card__body {
    padding: 101px 41px;
  }
}
@media (min-width: 1440px) {
  .card__body {
    padding: 101px 95px;
  }
}
</style>
