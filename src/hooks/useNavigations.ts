import { useRouter, useRoute, RouteLocationRaw, onBeforeRouteUpdate } from 'vue-router';

const useNavigations = () => {
  const router = useRouter();
  const route = useRoute();

  const push = (to: RouteLocationRaw) => {
    router.push(to);
  };

  const replace = (to: RouteLocationRaw) => {
    router.replace(to);
  };

  const goTo = (delta: number) => {
    router.go(delta);
  };

  const getParamValue = (value: string): string | string[] => {
    return route.params[value];
  };

  const getRouteName = () => {
    return route.name;
  };

  return {
    goTo,
    pushToRoute: push,
    replaceToRoute: replace,
    getParamValue,
    getRouteName,
    onBeforeRouteUpdate,
  };
};

export default useNavigations;
