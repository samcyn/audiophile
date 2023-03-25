import {
  createWebHistory,
  createRouter,
  RouteRecordRaw,
  RouterView,
} from 'vue-router';

import AppHomePage from './pages/AppHomePage.vue';
import AppHeadPhonesPage from './pages/AppHeadPhonesPage.vue';
import AppSpeakersPage from './pages/AppSpeakersPage.vue';
import AppEarPhonesPage from './pages/AppEarPhonesPage.vue';
import AppProductDetailedPage from './pages/AppProductDetailedPage.vue';

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    name: 'home',
    component: AppHomePage,
  },
  {
    path: '/headphones',
    name: 'headphones',
    component: AppHeadPhonesPage,
  },
  {
    path: '/speakers',
    name: 'speakers',
    component: AppSpeakersPage,
  },
  {
    path: '/earphones',
    name: 'earphones',
    component: AppEarPhonesPage,
  },
  {
    path: '/product/:slug/details',
    name: 'product-details',
    component: AppProductDetailedPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
