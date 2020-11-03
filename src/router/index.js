import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import((window.location.href = 'https://www.gagik.me/about'))
  },
  {
    path: '/Contacts',
    name: 'Contacts',
    component: () =>
      import((window.location.href = 'https://www.gagik.me/contact'))
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import((window.location.href = 'https://www.gagik.me'))
  }
];

const router = new VueRouter({
  routes
});

export default router;
