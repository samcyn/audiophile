import { Meta, StoryFn } from '@storybook/vue3';
import AppProductCardVue from '../components/shared/cards/AppCardWithFloatingImage.vue';

export default {
  title: 'UI/AppProductCard',
  component: AppProductCardVue,
} as Meta<typeof AppProductCardVue>;

const Template: StoryFn<
  typeof AppProductCardVue
> = (args) => ({
  components: { AppProductCardVue },
  setup() {
    return { args };
  },
  template: '<app-product-card-vue />',
});

export const ContainedButton = Template.bind({});
