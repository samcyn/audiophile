import { Meta, StoryFn } from '@storybook/vue3';
import AppButtonVue from '../components/AppButton.vue';

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

const Template: StoryFn<typeof AppButtonVue> = (
  args
) => ({
  components: { AppButtonVue },
  setup() {
    return { args };
  },
  template:
    '<app-button-vue v-bind="args" #="{}">CLICK ME PLEASE</app-button-vue>',
});

export const Primary = Template.bind({});

Primary.args = {
  variant: 'contained',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'outlined',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'text',
};
