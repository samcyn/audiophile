import { Meta, StoryFn } from '@storybook/vue3';
import AppProductCardVue from '../components/shared/cards/AppCardWithOverlay.vue';

export default {
  title: 'UI/AppProductCard4',
  component: AppProductCardVue,
} as Meta<typeof AppProductCardVue>;

const Template: StoryFn<typeof AppProductCardVue> = (args) => ({
  components: { AppProductCardVue },
  setup() {
    return { args };
  },
  template: '<app-product-card-vue />',
});

export const DefaultCard = Template.bind({});

const TemplateTwo: StoryFn<typeof AppProductCardVue> = (args) => ({
  components: { AppProductCardVue },
  setup() {
    return { args };
  },
  template: `
    <app-product-card-vue>
      <img
        src="/src/assets/shared/mobile/image-best-gear.jpg"
        class="card__image h-full w-full md:hidden"
        alt="product image"
      />
      <img
        src="/src/assets/shared/tablet/image-best-gear.jpg"
        class="card__image h-full w-full hidden md:inline xl:hidden"
        alt="product image"
      />
      <img
        src="/src/assets/shared/desktop/image-best-gear.jpg"
        class="card__image h-full w-full hidden xl:inline"
        alt="product image"
      />
    </app-product-card-vue>
  `,
});

export const AnotherCard = TemplateTwo.bind({});
