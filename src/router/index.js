import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    components: {
      default: () => import(/* webpackChunkName: "index" */ '@/views/index.vue'),
      topbar: () => import(/* webpackChunkName: "topbar" */ '@/components/topbar-home.vue'),
    },
  },
  {
    path: '/:author/:slug',
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
    },
  },
  {
    path: '/new',
    name: 'new',
    components: {
      default: () => import(/* webpackChunkName: "new" */ '@/views/new.vue'),
    },
  },
  {
    path: '/activity',
    name: 'activity',
    components: {
      default: () => import(/* webpackChunkName: "new" */ '@/views/activity.vue'),
    },
  },
  {
    path: '/profile',
    name: 'profile',
    components: {
      default: () => import(/* webpackChunkName: "new" */ '@/views/profile.vue'),
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
