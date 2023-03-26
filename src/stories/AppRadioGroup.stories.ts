import { Meta, StoryFn } from '@storybook/vue3';
import AppRadioGroupVue from '../components/shared/AppRadioGroup.vue';

export default {
  title: 'UI/AppRadioGroup',
  component: AppRadioGroupVue,
  argTypes: {},
} as Meta<typeof AppRadioGroupVue>;

const Template: StoryFn<typeof AppRadioGroupVue> = (args) => ({
  components: { AppRadioGroupVue },
  setup() {
    return { args };
  },
  template: '<app-radio-group-vue v-bind="args" />',
});

export const DefaultRadioGroup = Template.bind({});

DefaultRadioGroup.args = {
  name: 'contained',
  label: 'Unchecked',
  options: [
    {
      name: 'first',
      value: 'first',
    },
    {
      name: 'second',
      value: 'second',
    },
  ],
};

export const RadioGroupWithDefaultValue = Template.bind({});
RadioGroupWithDefaultValue.args = {
  name: 'outlined',
  label: 'Checked',
  defaultValue: 'first',
  options: [
    {
      name: 'first',
      value: 'first',
    },
    {
      name: 'second',
      value: 'second',
    },
  ],
};
