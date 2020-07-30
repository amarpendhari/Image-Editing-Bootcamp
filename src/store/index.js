import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import task from "./modules/task";
import preview from "./modules/preview";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    auth,
    task,
    preview
  }
});
