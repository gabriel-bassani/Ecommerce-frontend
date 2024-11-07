import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue'
import ProductPage from '../views/ProductPage.vue';
// import ProductPage from '@/views/ProductPage.vue';

const routes = [
  { path: '/', component: HomePage },
  {
    path: '/product/:id',
    name: 'Product',
    component: ProductPage,
    props: true,
  },
  // { path: '/product/:id', component: ProductPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
