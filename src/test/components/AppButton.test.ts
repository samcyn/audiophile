import { mount } from '@vue/test-utils';
import AppButton from '../../components/AppButton.vue';

test('mount AppButton component', async () => {
  expect(AppButton).toBeTruthy();

  const wrapper = mount(AppButton, {
    props: {},
  });

  expect(wrapper.html()).toMatchSnapshot();
});
