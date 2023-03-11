import { Meta, StoryFn } from '@storybook/vue3';
import AppLinkVue from '../components/AppLink.vue';

export default {
  title: 'UI/AppLink',
  component: AppLinkVue,
  argTypes: {},
} as Meta<typeof AppLinkVue>;

const Template: StoryFn<typeof AppLinkVue> = (
  args
) => ({
  components: { AppLinkVue },
  setup() {
    return { args };
  },
  template: '<app-link-vue v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {
  text: 'Google',
  url: 'https://www.google.com/',
};
