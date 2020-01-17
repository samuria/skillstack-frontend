import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBullhorn,
  faPlus,
  faSearch,
  faPlusCircle,
  faMapMarkerAlt,
  faClock,
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App";
import store from "./store";
import router from "./router";

library.add(
  faBullhorn,
  faPlus,
  faSearch,
  faPlusCircle,
  faMapMarkerAlt,
  faClock,
  faBriefcase
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
