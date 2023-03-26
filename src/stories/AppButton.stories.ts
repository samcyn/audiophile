import { Meta, StoryFn } from '@storybook/vue3';
import AppButtonVue from '../components/shared/AppButton.vue';

export default {
  title: 'UI/AppButton',
  component: AppButtonVue,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
    },
  },
} as Meta<typeof AppButtonVue>;

const Template: StoryFn<typeof AppButtonVue> = (args) => ({
  components: { AppButtonVue },
  setup() {
    return { args };
  },
  template: '<app-button-vue v-bind="args">CLICK ME PLEASE</app-button-vue>',
});

export const ContainedButton = Template.bind({});

ContainedButton.args = {
  variant: 'contained',
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  variant: 'outlined',
};

export const TextButton = Template.bind({});
TextButton.args = {
  variant: 'text',
};
