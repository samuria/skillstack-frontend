import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';

// Setup Ant Design
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import { FormModel } from 'ant-design-vue';
Vue.use(Antd);
Vue.use(FormModel);

// Setup image lazy loader
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload);

// Import styles
require('./assets/styles/skeleton.css');

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
  faArrowRight,
  faPlusCircle,
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
  faArrowRight,
  faPlusCircle
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  render: (h) => h(App),
});
