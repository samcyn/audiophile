import { ref } from 'vue';

const useControlled = (
  valueProp: unknown,
  defaultStateValue: unknown
): [unknown, unknown] => {
  // check if value prop is set, if so it's a controlled component
  const isControlled = ref<boolean>(valueProp !== undefined);
  // define the local state value
  const computedState = ref<unknown>(defaultStateValue);
  // decide which to use if it's controlled or not
  const value = isControlled.value ? valueProp : computedState.value;
  // method to change local state if it's uncontrolled
  const setValueIfUncontrolled = (val: unknown) => {
    if (!isControlled.value) {
      computedState.value = val;
    }
  };
  return [value, setValueIfUncontrolled];
};

export default useControlled;
