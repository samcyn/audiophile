import { Meta, StoryFn } from '@storybook/vue3';
import AppProductCardVue from '../components/shared/cards/AppCardWithActionButton.vue';

export default {
  title: 'UI/AppProductCard5',
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

export const DefaultCard = Template.bind({});
