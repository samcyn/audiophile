import {
  createWebHistory,
  createRouter,
  RouteRecordRaw,
} from 'vue-router';

import AppHomePage from './pages/AppHomePage.vue';
import AppHeadPhonesPage from './pages/AppHeadPhonesPage.vue';
import AppSpeakersPage from './pages/AppSpeakersPage.vue';
import AppEarPhonesPage from './pages/AppEarPhonesPage.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
