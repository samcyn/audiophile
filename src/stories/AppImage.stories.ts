import { Meta, StoryFn } from '@storybook/vue3';
import AppImageVue from '../components/shared/AppImage.vue';

export default {
  title: 'UI/AppImage',
  component: AppImageVue,
  argTypes: {},
} as Meta<typeof AppImageVue>;

const Template: StoryFn<typeof AppImageVue> = (
  args
) => ({
  components: { AppImageVue },
  setup() {
    return { args };
  },
  template: '<app-image-vue v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {
  src: 'https://media.istockphoto.com/id/1360923661/photo/flying-pigeon-in-the-woods.jpg?b=1&s=170667a&w=0&k=20&c=tc3Q6rDKEjYmXdqqTXQ0hI2X-CiLcITVnZdFxTpWXog=',
  width: '400px',
  height: '400px',
};
