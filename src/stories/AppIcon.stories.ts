import { Meta, StoryFn } from '@storybook/vue3';
import AppIconVue from '../components/shared/AppIcon.vue';
import IconsLibrary from '../lib/iconLibrary';

export default {
  title: 'UI/AppIcon',
  component: AppIconVue,
} as Meta<typeof AppIconVue>;

const Template: StoryFn = (args) => ({
  components: { AppIconVue },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `
    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
      <div v-for="icon in args.icons"
        :key="icon"
        :title="icon"
        style="padding: 4px; border: 1px solid #000; display: flex; align-items: center; justify-content: center;"
      >
        <app-icon-vue :icon="icon" :size="args.size" :height="args.height" :width="args.width"/>
      </div>
    </div>
  `,
});

export const DefaultIcons = Template.bind({});

DefaultIcons.args = {
  icons: Object.keys(IconsLibrary),
  size: 20,
  height: '25px',
  width: 'auto',
};
