import { mount } from '@vue/test-utils';
import AppRadioGroup from '../../components/AppRadioGroup.vue';

test('mount AppRadioGroup component', async () => {
  expect(AppRadioGroup).toBeTruthy();

  const wrapper = mount(AppRadioGroup, {
    props: {},
  });

  expect(wrapper.html()).toMatchSnapshot();
});
