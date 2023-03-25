import {
  createWebHistory,
  createRouter,
  RouteRecordRaw,
} from 'vue-router';

import AppHomePage from './pages/AppHomePage.vue';
import AppProductPage from './pages/AppProductPage.vue';
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
    component: AppProductPage,
    props: {
      pageTitle: 'Headphones',
      category: 'headphones',
      detailPageName: 'product-details',
    },
  },
  {
    path: '/speakers',
    name: 'speakers',
    component: AppProductPage,
    props: {
      pageTitle: 'Speakers',
      category: 'speakers',
      detailPageName: 'product-details',
    },
  },
  {
    path: '/earphones',
    name: 'earphones',
    component: AppProductPage,
    props: {
      pageTitle: 'Earphones',
      category: 'earphones',
      detailPageName: 'product-details',
    },
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
