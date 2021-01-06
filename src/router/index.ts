import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/index',
      component: () => import('../views/index.vue')
    }
  ]
});
