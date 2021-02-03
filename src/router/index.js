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
      bottombar: () => import(/* webpackChunkName: "bottombar" */ '@/components/bottombar-home.vue'),
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
    props: {
      bottombar: { bottombarType: 'has-background-white' },
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
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'is-active is-inverted',
});

export default router;
