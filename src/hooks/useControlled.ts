import { ref, Ref } from 'vue';

type T = Ref<
  string | number | boolean | undefined
>;

const useControlled = (
  valueProp: T,
  defaultStateValue?: T
): [
  T,
  (
    prop: string | number | boolean | undefined
  ) => void
] => {
  // check if value prop is set, if so it's a controlled component
  const isControlled = ref<boolean>(
    valueProp?.value !== undefined
  );

  // define the local state value
  const computedState = ref(
    defaultStateValue?.value
  );

  // decide which to use if it's controlled or not
  const value = isControlled.value
    ? valueProp
    : computedState;

  // method to change local state if it's uncontrolled
  const setValueIfUncontrolled = (
    val: string | number | boolean | undefined
  ) => {
    if (!isControlled.value) {
      computedState.value = val;
    }
  };
  return [value, setValueIfUncontrolled];
};

export default useControlled;
