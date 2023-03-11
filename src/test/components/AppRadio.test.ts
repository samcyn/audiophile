import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import AppRadio from '../../components/AppRadio.vue';

test('mount AppRadio component', async () => {
  expect(AppRadio).toBeTruthy();

  const wrapper = mount(AppRadio, {
    props: {},
  });

  expect(wrapper.html()).toMatchSnapshot();
});
