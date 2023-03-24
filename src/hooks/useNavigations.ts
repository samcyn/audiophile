import {
  useRouter,
  RouteLocationRaw,
} from 'vue-router';

const useNavigations = () => {
  const router = useRouter();

  const push = (to: RouteLocationRaw) => {
    router.push(to);
  };

  const goTo = (delta: number) => {
    router.go(delta);
  };

  return {
    goTo,
    pushToRoute: push,
  };
};

export default useNavigations;
