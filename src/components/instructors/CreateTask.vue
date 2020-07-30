<template>
  <div class="Form text-center">
    <h2 class="p-2">Create Task</h2>
    <form @submit.prevent="SubmitForm">
      <!-- <picture-input
        ref="pictureInput"
        width="200"
        height="200"
        margin="16"
        accept="image/jpeg, image/png"
        size="10"
        button-class="btn"
        :custom-strings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag & Drop a Image or Click to upload'
       // drag: 'Drag a 😺 GIF or GTFO'
      }"
        @change="onChange" v-model="image"
      ></picture-input>-->
      <input type="url" placeholder="Task Image URL" v-model="image" required />
      <input
        type="text"
        placeholder="Task Name"
        maxlength="30"
        v-model="name"
        required
      />
      <textarea
        v-model="desc"
        maxlength="120"
        placeholder="Add Description.....(Editing details)"
      ></textarea>
      <button class="btn btn-dark mt-3">Add Task</button>
    </form>
  </div>
</template>

<script>
//import PictureInput from "vue-picture-input";
import { mapActions } from "vuex";
export default {
  name: "CreateTask",
  data() {
    return {
      name: "",
      desc: "",
      image: ""
    };
  },
  components: {
    //PictureInput
  },
  methods: {
    ...mapActions(["AddTask"]),
    onChange(image) {
      console.log("New picture selected!");
      if (image) {
        console.log("Picture loaded.");
        this.image = image;
      } else {
        console.log("FileReader API not supported: use the <form>, Luke!");
      }
    },
    SubmitForm(e) {
      e.preventDefault();
      let task = {
        name: this.name,
        desc: this.desc,
        image: this.image
      };
      this.AddTask(task);
    }
  }
};
</script>

<style>
button.btn {
  margin: 0;
}
</style>
