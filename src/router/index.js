import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import auth from '@/middleware/authorisation';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    components: {
      default: () => import(/* webpackChunkName: "index" */ '@/views/index.vue'),
      topbar: () => import(/* webpackChunkName: "topbar" */ '@/components/topbar-home.vue'),
      bottombar: () => import(/* webpackChunkName: "bottombar" */ '@/components/bottombar-home.vue'),
    },
  },
  {
    path: '/',
    name: 'login',
    components: {
      default: () => import(/* webpackChunkName: "login" */ '@/views/login.vue'),
      topbar: () => import(/* webpackChunkName: "topbar" */ '@/components/topbar-home.vue'),
      bottombar: () => import(/* webpackChunkName: "bottombar" */ '@/components/bottombar-home.vue'),
    },
  },
  {
    path: '/edit/:id',
    name: 'edit',
    components: {
      default: () => import(/* webpackChunkName: "edit" */ '@/views/edit.vue'),
      topbar: () => import(/* webpackChunkName: "topbar" */ '@/components/topbar-article.vue'),
      bottombar: () => import(/* webpackChunkName: "bottombar" */ '@/components/bottombar-home.vue'),
    },
    props: {
      topbar: (route) => ({ title: `Edit post ${route.params.id}` }),
    },
    meta: {
      middleware: [
        auth.isAuthenticated,
        auth.isWriter,
      ],
    },
  },
  {
    path: '/:userId/:id',
    name: 'article',
    components: {
      default: () => import(/* webpackChunkName: "article" */ '@/views/article.vue'),
      topbar: () => import(/* webpackChunkName: "topbar" */ '@/components/topbar-article.vue'),
      bottombar: () => import(/* webpackChunkName: "bottombar" */ '@/components/bottombar-article.vue'),
    },
  },
  {
    path: '/bookmarks',
    name: 'bookmarks',
    components: {
      default: () => import(/* webpackChunkName: "bookmarks" */ '@/views/bookmarks.vue'),
      topbar: () => import(/* webpackChunkName: "topbar" */ '@/components/topbar-bookmarks.vue'),
      bottombar: () => import(/* webpackChunkName: "bottombar" */ '@/components/bottombar-home.vue'),
    },
    meta: {
      middleware: [
        auth.isAuthenticated,
      ],
    },
  },
  {
    path: '/new',
    name: 'new',
    components: {
      default: () => import(/* webpackChunkName: "new" */ '@/views/new.vue'),
      topbar: () => import(/* webpackChunkName: "topbar" */ '@/components/topbar.vue'),
      bottombar: () => import(/* webpackChunkName: "bottombar" */ '@/components/bottombar-home.vue'),
    },
    props: {
      topbar: { title: 'New' },
    },
    meta: {
      middleware: [
        auth.isAuthenticated,
        auth.isWriter,
      ],
    },
  },
  {
    path: '/activity',
    name: 'activity',
    components: {
      default: () => import(/* webpackChunkName: "new" */ '@/views/activity.vue'),
      topbar: () => import(/* webpackChunkName: "topbar" */ '@/components/topbar.vue'),
      bottombar: () => import(/* webpackChunkName: "bottombar" */ '@/components/bottombar-home.vue'),
    },
    props: {
      topbar: { title: 'Activity' },
    },
    meta: {
      middleware: [
        auth.isAuthenticated,
      ],
    },
  },
  {
    path: '/profile',
    name: 'profile',
    components: {
      default: () => import(/* webpackChunkName: "new" */ '@/views/profile.vue'),
      topbar: () => import(/* webpackChunkName: "topbar" */ '@/components/topbar.vue'),
      bottombar: () => import(/* webpackChunkName: "bottombar" */ '@/components/bottombar-home.vue'),
    },
    props: {
      topbar: { title: 'Profile' },
    },
    meta: {
      middleware: [
        auth.isAuthenticated,
      ],
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'is-active is-inverted',
});

router.beforeEach((to, from, next) => {
  const context = {
    to,
    from,
    next,
    store,
  };
  let redir = {};
  if (to.matched.every((record) => !record.meta.middleware)) {
    auth.checkAuth(context);
    redir = {};
  } else {
    const { middleware } = to.matched.find((record) => record.meta.middleware).meta;
    redir = middleware.every((m) => m(context)) ? {} : { name: 'login', query: { redirect: to.path } };
  }
  return next(redir);
});

export default router;
