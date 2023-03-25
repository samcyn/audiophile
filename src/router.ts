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
        path: ':slug/detail',
        name: 'headphones-detailed',
        component: AppHeadPhonesDetailedPage,
      },
    ],
  },
  {
    path: '/speakers',
    name: 'speakers',
    component: RouterView,
    children: [
      {
        path: '',
        name: 'speakers-root',
        component: AppSpeakersPage,
      },
      {
        path: ':slug/detail',
        name: 'speakers-detailed',
        component: AppSpeakersPage,
      },
    ],
  },
  {
    path: '/earphones',
    name: 'earphones',
    component: RouterView,
    children: [
      {
        path: '',
        name: 'earphones-root',
        component: AppEarPhonesPage,
      },
      {
        path: ':slug/detail',
        name: 'earphones-detailed',
        component: AppEarPhonesPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
