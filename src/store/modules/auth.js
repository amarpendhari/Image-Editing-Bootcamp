import axios from "axios";
import { vm } from "@/main";

const state = {
  users: [],
  user: {},
  error: null,
  email: localStorage.getItem("email")
};

const getters = {
  User: state => state.user,
  Users: state => state.users,
  Errors: state => state.error
};

const actions = {

  // Get Users
  async getUsers({ commit }) {
    try {
      const res = await axios.get("http://localhost:5000/users");
      commit("GetUsers", res.data);
    } catch (err) {
      console.error(err);
    }
  },

  // Register Users
  async registerUser({ dispatch, commit }, user) {
    try {
      const response = await axios.post("http://localhost:5000/users", user);
      commit("userAdded");
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("name", response.data.name);
      await dispatch("loadUser", response.data.id);
      vm.$router.push({ path: "/dashboard" }).catch(() => {});
    } catch (err) {
      console.error(err.response);
    }
  },

  // Set User
  async loadUser({ commit }, id) {
    try {
      const res = await axios.get(`http://localhost:5000/users/${id}`);
      commit("SetUser", res.data);
    } catch (err) {
      console.error(err);
    }
  },

  // User Logg IN
  async logIN({ commit }, email) {
    try {
      const res = await axios.get(`http://localhost:5000/users?email=${email}`);
      //console.log(res.data[0]);
      if (res.data[0]) {
        commit("SetUser", res.data[0]);
        localStorage.setItem("email", res.data[0].email);
        localStorage.setItem("name", res.data[0].name);
        vm.$router.push({ path: "/dashboard" }).catch(() => {});
      } else {
        vm.$router.push({ path: "/login" }).catch(() => {});
      }
    } catch (err) {
      console.error(err);
    }
  },

  // Log Out
  Logout({ dispatch }) {
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    vm.$router.push({ path: "/login" }).catch(() => {});
    dispatch("getUsers");
  },

  // Set Alert
  setAlert({ commit }, error) {
    commit("Alert", error);
  }
};

const mutations = {
  GetUsers: (state, users) => {
    (state.users = users), (state.user = {});
  },
  SetUser: (state, user) => {
    (state.user = user), (state.users = []);
  },
  userAdded: state => {
    state.Users;
  },
  Alert: (state, error) => {
    state.error = error;
    setTimeout(
      function() {
        state.error = null;
      }.bind(this),
      3000
    );
  },
  ClearAlert: state => (state.error = null)
};

export default {
  state,
  getters,
  actions,
  mutations
};
