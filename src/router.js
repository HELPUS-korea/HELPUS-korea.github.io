import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('./views/AboutUs.vue'),
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('./views/History.vue'),
    },
    {
      path: '/ci',
      name: 'ci',
      component: () => import('./views/CI.vue'),
    },
  ],
});
