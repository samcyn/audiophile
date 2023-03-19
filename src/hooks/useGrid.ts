import {
  inject,
  provide,
  computed,
  toRefs,
  ref,
  ToRefs,
  CSSProperties,
} from 'vue';
import type { InjectionKey } from 'vue';

export type AppGridRowProps = {
  gutterX?: number;
  gutterY?: number;
};
/**
 * TODOS
 * make grid use span
 * refactor code to make it cleaner
 */
export type ColType =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

export type GridScreenType =
  | 'span'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl';

export type AppGridColProps = Partial<{
  [K in GridScreenType]: ColType;
}>;

type INJECT_KEY_PROP = ToRefs<
  Required<AppGridRowProps>
>;

const INJECT_KEY =
  Symbol() as InjectionKey<INJECT_KEY_PROP>;

export const useGridRow = (
  props: AppGridRowProps
) => {
  // to keep reactivity, destructure using toRefs
  const { gutterX, gutterY } = toRefs(props);
  const computedProps = computed(() => ({
    marginX: gutterX?.value
      ? gutterX.value / 2
      : 0,
    marginY: gutterY?.value
      ? gutterY.value / 2
      : 0,
  }));

  const { marginX, marginY } =
    computedProps.value;
  const rowStyles: CSSProperties = {
    margin: `-${marginY}px -${marginX}px`,
  };
  // set providers keys to all children
  provide(INJECT_KEY, {
    gutterX,
    gutterY,
  });
  return {
    rowStyles,
  };
};

export const useGridCol = (
  props: AppGridColProps
) => {
  const defaultGutterX = ref(5);
  const defaultGutterY = ref(0);

  const groupContext = inject<INJECT_KEY_PROP>(
    INJECT_KEY,
    {
      gutterX: defaultGutterX,
      gutterY: defaultGutterY,
    }
  );

  const { gutterX, gutterY } = groupContext;
  const { span, xs, sm, md, lg, xl, xxl } =
    toRefs(props);

  const computedProps = computed(() => ({
    span: span?.value ?? 0,
    xs: xs?.value ?? 0,
    sm: sm?.value ?? 0,
    md: md?.value ?? 0,
    lg: lg?.value ?? 0,
    xl: xl?.value ?? 0,
    xxl: xxl?.value ?? 0,
  }));

  const colStyles: CSSProperties = {
    padding: `${gutterY.value / 2}px ${
      gutterX.value / 2
    }px`,
  };

  const _arrays: GridScreenType[] = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
  ];
  const classes = {} as Record<string, boolean>;

  _arrays.forEach((record) => {
    const mmm = computedProps.value[record];
    const fraction = mmm / 12;
    const basis =
      fraction === 1 ? 'full' : `${mmm}/12`;
    const isNotZero = mmm !== 0;

    if (record === 'xs') {
      if (isNotZero) {
        classes[`basis-${basis} w-${basis}`] =
          isNotZero;
      } else {
        // default to this for full width in mobile
        classes[`basis-full w-full`] = true;
      }
    } else {
      classes[
        `${record}:basis-${basis} ${record}:w-${basis}`
      ] = isNotZero;
    }
  });

  return {
    colStyles,
    classes,
  };
};
