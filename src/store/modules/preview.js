import axios from "axios";

const state = {
  editedList: []
};

const getters = {
  EditedList: state => state.editedList
};

const actions = {

  // Get Edited Iamges
  async getEdited({ commit }) {
    const res = await axios.get("http://localhost:5000/edited");

    commit("GetEdited", res.data);
  },

  // Edit Image
  async EditImage({ commit }, edited) {
    try {
      const res = await axios.post("http://localhost:5000/edited", edited);
      commit("ImageEdited", res.data);
    } catch (err) {
      console.log(err);
    }
  },

  // Rate Image
  async RateImage({ commit }, edited) {
    try {
      const res = await axios.put(
        `http://localhost:5000/edited/${edited.id}`,
        edited
      );
      console.log(res);
      commit("Rated");
    } catch (err) {
      console.log(err);
    }
  }
};

const mutations = {
  GetEdited: (state, data) => (state.editedList = data),
  ImageEdited: (state, data) =>
    (state.editedList = [...state.editedList, data]),
  Rated: state => (state.editedList = [...state.editedList])
};

export default { state, getters, actions, mutations };
