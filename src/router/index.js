import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
  },
  // Users
  {
    path: '/feed',
    name: 'feed',
    component: () => import('../views/Feed.vue'),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    // console.log(`Passou para ${to.path}`);
    next();
    return;
  }

  if (localStorage.getItem('token')) {
    // console.log(`Passou para ${to.path}`);
    next();
    return;
  }

  // console.log(`Não passou para ${to.path}`);
  next({ name: 'login' });
});

export default router;
