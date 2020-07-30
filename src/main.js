import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import store from "../src/store/index";
import { routes } from "./routes/routes";
import StarRating from "vue-star-rating";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.component("star-rating", StarRating);

Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

const vm = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");

export { vm };

