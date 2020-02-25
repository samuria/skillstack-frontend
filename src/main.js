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

// Loading spinner
import LoadingSpinner from './components/shared/LoadingSpinner';
Vue.component('loading-spinner', LoadingSpinner);

// vue-select setup
import VueSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
Vue.component('v-select', VueSelect);

// Import Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
  faBell,
  faSearch,
  faLink,
  faCalendarAlt,
  faMapMarkedAlt,
  faUser,
  faGlobe,
  faMapMarkerAlt,
  faTags,
  faEnvelope,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
library.add(
  faPlus,
  faBell,
  faSearch,
  faTwitter,
  faLink,
  faCalendarAlt,
  faMapMarkedAlt,
  faUser,
  faGlobe,
  faMapMarkerAlt,
  faTags,
  faEnvelope,
  faLinkedin,
  faArrowRight
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
