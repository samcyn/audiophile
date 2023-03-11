import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import AppNumberInput from '../../components/AppNumberInput.vue';

test('mount AppNumberInput component', async () => {
  expect(AppNumberInput).toBeTruthy();

  const wrapper = mount(AppNumberInput, {
    props: {},
  });

  expect(wrapper.html()).toMatchSnapshot();
});
