import Vue from 'vue';
import Router from 'vue-router';
import Home2 from './views/Home2.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home2,
    },
  ],
  mode: 'history',
});
