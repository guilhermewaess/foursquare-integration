import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Home2 from './views/Home2.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home2',
      name: 'home2',
      component: Home,
    },
    {
      path: '/',
      name: 'home',
      component: Home2,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
