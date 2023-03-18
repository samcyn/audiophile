import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import AppRadioGroup from '../../components/shared/AppRadioGroup.vue';

test('mount AppRadioGroup component', async () => {
  expect(AppRadioGroup).toBeTruthy();

  const wrapper = mount(AppRadioGroup, {
    props: {
      name: 'test',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
