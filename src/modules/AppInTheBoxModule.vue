<script setup lang="ts">
interface Props {
  boxTitle?: string;
  cardTitle?: string;
  cardDescription?: '';
}
withDefaults(defineProps<Props>(), {
  boxTitle: '',
  cardTitle: '',
  cardDescription: '',
});
</script>
<template>
  <section
    class="mb-[88px] md:mb-[120px] lg:mb-40"
  >
    <div class="container">
      <div class="lg:flex lg:justify-between">
        <!-- card -->
        <div
          class="card mb-[88px] md:mb-[120px] lg:mb-0"
        >
          <slot name="cardTitle">
            <p
              class="card__title font-bold text-black-100 uppercase mb-6 md:mb-8"
            >
              {{ cardTitle }}
            </p>
          </slot>

          <slot name="cardDescription">
            <div
              class="card__desc font-medium text-black-100/50"
              v-html="cardDescription"
            ></div>
          </slot>
        </div>
        <!-- end card -->

        <!-- box -->
        <div
          class="box flex flex-col gap-6 md:gap-0 lg:gap-8 md:flex-row lg:flex-col"
        >
          <slot name="boxTitle">
            <p
              class="box__title font-bold text-black-100 uppercase"
            >
              {{ boxTitle }}
            </p>
          </slot>
          <ul class="list-none p-0 m-0">
            <li class="box__listItem">
              <span
                class="box__spanIndicator font-bold text-orange-100"
                >2x</span
              ><span
                class="box__spanText font-medium text-black-100/50"
                >Speaker</span
              >
            </li>
            <li class="box__listItem">
              <span
                class="box__spanIndicator font-bold text-orange-100"
                >2x</span
              ><span
                class="box__spanText font-medium text-black-100/50"
                >Speaker</span
              >
            </li>
          </ul>
        </div>
        <!-- end box -->
      </div>
    </div>
  </section>
</template>
<style scoped>
.box__title {
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.857143px;
}

.box__listItem {
  font-size: 15px;
  line-height: 25px;
}
.box__listItem:not(:last-child) {
  margin-bottom: 8px;
}

.card__title {
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.857143px;
}

.card__desc {
  font-size: 15px;
  line-height: 25px;
  mix-blend-mode: normal;
}

@media (min-width: 768px) {
  .box {
    gap: 11px;
  }
  .box__title,
  .card__title {
    font-size: 32px;
    letter-spacing: 1.14286px;
  }
  .box__title {
    width: 339px;
  }
}

@media (min-width: 1024px) {
  .box__title {
    width: auto;
  }
  .box {
    width: 350px;
  }
  .card {
    width: 635px;
  }
}
</style>
