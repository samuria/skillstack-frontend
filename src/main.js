import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBullhorn,
  faPlus,
  faSearch,
  faPlusCircle,
  faMapMarkerAlt,
  faClock,
  faBriefcase,
  faArrowCircleRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Multiselect from 'vue-multiselect';

import App from './App';
import store from './store';
import router from './router';

library.add(
  faBullhorn,
  faPlus,
  faSearch,
  faPlusCircle,
  faMapMarkerAlt,
  faClock,
  faBriefcase,
  faArrowCircleRight
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('multiselect', Multiselect);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
