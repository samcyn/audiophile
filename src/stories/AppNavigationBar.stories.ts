import { Meta, StoryFn } from '@storybook/vue3';
import AppNavigationBarVue from '../components/AppNavigationBar.vue';

export default {
  title: 'UI/AppNavigationBar',
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
