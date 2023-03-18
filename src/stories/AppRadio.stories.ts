import { Meta, StoryFn } from '@storybook/vue3';
import AppRadioVue from '../components/shared/AppRadio.vue';

export default {
  title: 'UI/AppRadio',
  component: AppRadioVue,
  argTypes: {},
} as Meta<typeof AppRadioVue>;

const Template: StoryFn<typeof AppRadioVue> = (
  args
) => ({
  components: { AppRadioVue },
  setup() {
    return { args };
  },
  template: '<app-radio-vue v-bind="args" />',
});

export const DefaultRadio = Template.bind({});

DefaultRadio.args = {
  name: 'contained',
  label: 'Unchecked',
  value: 'contained',
};

export const CheckedRadio = Template.bind({});
CheckedRadio.args = {
  name: 'outlined',
  label: 'Checked',
  value: 'outlined',
  modelValue: 'outlined',
};
