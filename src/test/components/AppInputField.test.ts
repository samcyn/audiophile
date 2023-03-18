import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import AppInputField from '../../components/shared/AppInputField.vue';

test('mount AppInputField component', async () => {
  expect(AppInputField).toBeTruthy();

  const wrapper = mount(AppInputField, {
    props: {},
  });

  expect(wrapper.html()).toMatchSnapshot();
});
