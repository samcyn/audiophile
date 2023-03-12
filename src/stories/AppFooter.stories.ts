import { Meta, StoryFn } from '@storybook/vue3';
import AppFooterVue from '../components/AppFooter.vue';

export default {
  title: 'LAYOUT/AppFooter',
  component: AppFooterVue,
  argTypes: {},
} as Meta<typeof AppFooterVue>;

const Template: StoryFn<typeof AppFooterVue> = (
  args
) => ({
  components: { AppFooterVue },
  setup() {
    return { args };
  },
  template: '<app-footer-vue v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {};
