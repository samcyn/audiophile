import {
  useRouter,
  useRoute,
  RouteLocationRaw,
} from 'vue-router';

const useNavigations = () => {
  const router = useRouter();
  const route = useRoute();

  const push = (to: RouteLocationRaw) => {
    router.push(to);
  };

  const goTo = (delta: number) => {
    router.go(delta);
  };

  const getParamValue = (
    value: string
  ): string | string[] => {
    return route.params[value];
  };

  return {
    goTo,
    pushToRoute: push,
    getParamValue,
  };
};

export default useNavigations;
