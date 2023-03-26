import { ref, Ref, UnwrapRef } from 'vue';

const useControlled = <P>(
  valueProp: Ref<P>,
  defaultStateValue?: Ref<P>
): [Ref<P> | Ref<UnwrapRef<P> | undefined>, (prop: UnwrapRef<P> | undefined) => void] => {
  // check if value prop is set, if so it's a controlled component
  const isControlled = ref<boolean>(valueProp?.value !== undefined);

  // define the local state value
  const computedState = ref<P | undefined>(defaultStateValue?.value);

  // decide which to use if it's controlled or not
  const value = isControlled.value ? valueProp : computedState;

  // method to change local state if it's uncontrolled
  const setValueIfUncontrolled = (val: UnwrapRef<P> | undefined) => {
    if (!isControlled.value) {
      computedState.value = val;
    }
  };
  return [value, setValueIfUncontrolled];
};

export default useControlled;
