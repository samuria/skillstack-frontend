import Vue from "vue";
import Meta from "vue-meta";
import Router from "vue-router";
import Home from "@/components/pages/Home";
import AddJob from "@/components/pages/AddJob";
import { PERIODS } from "../store/constants";

Vue.use(Router);
Vue.use(Meta);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        hasBanner: true
      },
      children: PERIODS.map(period => ({
        path: period.slug,
        component: Home,
        meta: {
          period: period.type,
          hasBanner: true
        }
      }))
    },
    {
      path: "/add-job",
      name: "AddJob",
      component: AddJob
    }
  ]
});

export default router;
