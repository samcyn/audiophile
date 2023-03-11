import { Meta, StoryFn } from '@storybook/vue3';
import AppIconButtonVue from '../components/AppIconButton.vue';
import IconsLibrary from '../lib/iconLibrary';

export default {
  title: 'UI/AppIconButton',
  component: AppIconButtonVue,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
    },
  },
} as Meta<typeof AppIconButtonVue>;

const Template: StoryFn = (args) => ({
  components: { AppIconButtonVue },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `
    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
      <div v-for="icon in args.icons"
        :key="icon"
        :title="icon"
        style="border: 1px solid #000; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center;"
      >
        <app-icon-button-vue :icon="icon" />
      </div>
    </div>
  `,
});

export const DefaultIcons = Template.bind({});

DefaultIcons.args = {
  icons: Object.keys(IconsLibrary),
};