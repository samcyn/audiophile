import { Meta, StoryFn } from '@storybook/vue3';
import AppInputFieldVue from '../components/shared/AppInputField.vue';

export default {
  title: 'UI/AppInputField',
  component: AppInputFieldVue,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
    },
  },
} as Meta<typeof AppInputFieldVue>;

const Template: StoryFn<
  typeof AppInputFieldVue
> = (args) => ({
  components: { AppInputFieldVue },
  setup() {
    return { args };
  },
  template:
    '<app-input-field-vue v-bind="args" />',
});

export const Primary = Template.bind({});

Primary.args = {
  name: 'name',
  label: 'Mr Bean',
  hasError: false,
  helperText: '',
  placeholder: 'please your name',
};
