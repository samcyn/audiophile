import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import AppRadio from '../../components/shared/AppRadio.vue';

test('mount AppRadio component', async () => {
  expect(AppRadio).toBeTruthy();

  const wrapper = mount(AppRadio, {
    props: {
      value: 'test',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
