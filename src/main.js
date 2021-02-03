import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import {
  wScroll,
  wResize,
  wOrientation,
} from '@/directives/window';
import {
  resize,
} from '@/directives/element';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Plugins
Vue.use(Buefy);

// directives
Vue.directive('w-scroll', wScroll);
Vue.directive('w-resize', wResize);
Vue.directive('w-orientation', wOrientation);
Vue.directive('resize', resize);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
