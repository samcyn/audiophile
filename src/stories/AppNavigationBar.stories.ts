import { Meta, StoryFn } from '@storybook/vue3';
import AppNavigationBarVue from '../components/layout/AppNavigationBar.vue';

export default {
  title: 'LAYOUT/AppNavigationBar',
  parameters: {
    layout: 'fullscreen',
  },
  component: AppNavigationBarVue,
  argTypes: {},
} as Meta<typeof AppNavigationBarVue>;

const Template: StoryFn<
  typeof AppNavigationBarVue
> = (args) => ({
  components: { AppNavigationBarVue },
  setup() {
    return { args };
  },
  template:
    '<app-navigation-bar-vue v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {};
