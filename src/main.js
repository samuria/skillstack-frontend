import Vue from 'vue';
require('./assets/styles/responsive.css');
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
  Icon,
  Divider,
  Tabs,
  Empty,
  Spin,
  Radio
} from 'ant-design-vue';

import App from './App';
import store from './store';
import router from './router';

// Setup image lazy loader
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload);

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
Vue.use(Divider);
Vue.use(Tabs);
Vue.use(Empty);
Vue.use(Spin);
Vue.use(Radio);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
