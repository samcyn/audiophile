import { Meta, StoryFn } from '@storybook/vue3';
import AppHeroComponentVue from '../../components/home-page/AppHeroComponent.vue';

export default {
  title: 'HomePage/AppHeroComponent',
  parameters: {
    layout: 'fullscreen',
  },
  component: AppHeroComponentVue,
} as Meta<typeof AppHeroComponentVue>;

const Template: StoryFn<typeof AppHeroComponentVue> = (args) => ({
  components: { AppHeroComponentVue },
  setup() {
    return { args };
  },
  template: '<app-hero-component-vue />',
});

export const ContainedButton = Template.bind({});
