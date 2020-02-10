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
import BounceLoader from 'vue-loading-spinner/src/components/DoubleBounce';
import 'ant-design-vue/dist/antd.css';
import {
  Layout,
  Button,
  Menu,
  Form,
  Input,
  Row,
  Col,
  Select,
  Tag,
  Card,
  Icon
} from 'ant-design-vue';

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
Vue.component('bounce-loader', BounceLoader);

Vue.use(Layout);
Vue.use(Menu);
Vue.use(Button);
Vue.use(Form);
Vue.use(Input);
Vue.use(Row);
Vue.use(Col);
Vue.use(Select);
Vue.use(Tag);
Vue.use(Card);
Vue.use(Icon);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
