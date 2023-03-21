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
import AppHeadPhonesDetailedPage from './pages/AppHeadPhonesDetailedPage.vue';

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    name: 'home',
    component: AppHomePage,
  },
  {
    path: '/headphones',
    name: 'headphones',
    component: RouterView,
    children: [
      {
        path: '',
        name: 'headphones-root',
        component: AppHeadPhonesPage,
      },
      {
        path: ':id/detail',
        name: 'headphones-detailed',
        component: AppHeadPhonesDetailedPage,
      },
    ],
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
