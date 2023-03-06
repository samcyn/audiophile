import {
  inject,
  InputHTMLAttributes,
  provide,
  Events,
  computed,
  toRefs,
  Ref,
} from 'vue';
import type { InjectionKey } from 'vue';

export type AppRadioGroupProps = {
  label?: string;
  name: string;
  modelValue: string | number | boolean;
  disabled: boolean;
  options?: AppRadioProps[];
};

export interface AppRadioProps
  extends Omit<InputHTMLAttributes, 'class'> {
  label?: string;
  name?: string;
  id?: string;
  value: string | number | boolean;
  modelValue?: string | number | boolean;
  ariaLabel?: string;
  ariaLabelledby?: string;
  helperText?: string;
  hasError?: boolean;
}

type INJECT_KEY_PROP = {
  name: Ref<string>;
  disabled: Ref<boolean>;
  modelValue: Ref<string | number | boolean>;
  onChange: (event: Events['onChange']) => void;
};

const INJECT_KEY =
  Symbol() as InjectionKey<INJECT_KEY_PROP>;

export const useRadioGroup = (
  props: AppRadioGroupProps,
  emit: (
    event: 'update:modelValue',
    ...args: (string | number | boolean)[]
  ) => void
) => {
  // to keep reactivity, destructure using toRefs
  const { name, disabled, modelValue } =
    toRefs(props);

  // update modelValue right here...
  const onChange = (
    event: Parameters<
      INJECT_KEY_PROP['onChange']
    >[0]
  ) => {
    const value = (
      event.target as HTMLInputElement
    ).value;
    if (modelValue.value) {
      emit('update:modelValue', value);
    }
  };

  // set providers keys to all children
  provide(INJECT_KEY, {
    name,
    disabled,
    modelValue,
    onChange,
  });
};

export const useRadio = (
  props: AppRadioProps,
  emit: (
    event: 'update:modelValue',
    ...args: (string | number | boolean)[]
  ) => void
) => {
  const groupContext =
    inject<INJECT_KEY_PROP>(INJECT_KEY);

  const onChange = (
    event: Events['onChange']
  ) => {
    const value = (
      event.target as HTMLInputElement
    ).value;
    if (groupContext) {
      groupContext.onChange?.(event);
    } else {
      emit('update:modelValue', value);
    }
  };

  const checked = computed(() => {
    if (groupContext) {
      return (
        groupContext.modelValue.value ===
        props.value
      );
    }
    return props.modelValue === props.value;
  });

  const id = computed(() =>
    String(props.id || props.value)
  );

  const disabled = computed(() => {
    if (groupContext?.modelValue) {
      return groupContext.disabled.value;
    }
    return props.disabled;
  });

  const name = computed(() => {
    if (groupContext?.modelValue) {
      return groupContext.name.value;
    }
    return props.name;
  });

  return {
    ...props,
    id,
    checked,
    disabled,
    name,
    onChange,
  };
};
