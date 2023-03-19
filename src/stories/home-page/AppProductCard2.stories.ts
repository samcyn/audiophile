import { Meta, StoryFn } from '@storybook/vue3';
import AppProductCardVue from '../../components/home-page/AppProductCard2.vue';

export default {
  title: 'HomePage/AppProductCard2',
  parameters: {
    layout: 'fullscreen',
  },
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
