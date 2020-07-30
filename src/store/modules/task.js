import axios from "axios";
import { vm } from "@/main";

const state = {
  tasks: [],
  selectedTask: null
};

const getters = {
  Tasks: state => state.tasks,
  SelectedTask: state => state.selectedTask
};

const actions = {
  
  // Get Tasks
  async getTasks({ commit }) {
    try {
      const res = await axios.get("http://localhost:5000/tasks");
      commit("GetTask", res.data);
    } catch (err) {
      console.error(err.response);
    }
  },

  // Create Task
  async AddTask({ commit }, task) {
    try {
      const response = await axios.post("http://localhost:5000/tasks", task);
      commit("TaskAdded");
      vm.$router.push({ path: "/dashboard/tasklist" }).catch(() => {});
      console.log(response);
    } catch (err) {
      console.error(err.response);
    }
  },

  async getSingleTask({ commit }, id) {
    try {
      const res = await axios.get(`http://localhost:5000/tasks/${id}`);
      commit("SingleTask", res.data);
    } catch (err) {
      console.error(err.response);
    }
  }
};
const mutations = {
  TaskAdded: state => state.tasks,
  GetTask: (state, data) => {
    (state.tasks = data), (state.selectedTask = null);
  },
  SingleTask: (state, data) => (state.selectedTask = data)
};

export default {
  state,
  getters,
  actions,
  mutations
};
