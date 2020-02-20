import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';

// Setup image lazy loader
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload);

// Import styles
require('./assets/styles/responsive.css');
require('./assets/styles/main.css');

// Import Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faPlus, faBell, faSearch);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
