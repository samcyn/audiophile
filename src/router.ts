import { defineComponent } from 'vue';
import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';

import AppHomePage from './pages/AppHomePage.vue';
import AppProductPage from './pages/AppProductPage.vue';
import AppProductDetailedPage from './pages/AppProductDetailedPage.vue';
import AppCheckoutPage from './pages/AppCheckoutPage.vue';

const NotFound = defineComponent({
  template: `<div>Not Found</div>`,
});

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
  {
    path: '/checkout',
    name: 'checkout',
    component: AppCheckoutPage,
  },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
