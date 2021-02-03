import Vue from 'vue';
import Buefy from 'buefy';
import '@/assets/style.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import moment from 'moment';
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
moment.locale('ru');

// global components
library.add(fas);
Vue.component('vue-fontawesome', FontAwesomeIcon);

// Plugins
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
});

// directives
Vue.directive('w-scroll', wScroll);
Vue.directive('w-resize', wResize);
Vue.directive('w-orientation', wOrientation);
Vue.directive('resize', resize);

// prototype
Vue.prototype.$moment = moment;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
