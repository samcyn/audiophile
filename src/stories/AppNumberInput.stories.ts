import { Meta, StoryFn } from '@storybook/vue3';
import AppNumberInput from '../components/shared/AppNumberInput.vue';

export default {
  title: 'UI/AppNumberInput',
  component: AppNumberInput,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
    },
  },
} as Meta<typeof AppNumberInput>;

const Template: StoryFn<typeof AppNumberInput> = (
  args
) => ({
  components: { AppNumberInput },
  setup() {
    return { args };
  },
  template: '<app-number-input v-bind="args" />',
});

export const Primary = Template.bind({});

Primary.args = {
  name: 'name',
  min: 0,
  max: 5,
};
