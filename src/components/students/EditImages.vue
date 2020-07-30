<template>
  <div>
    <DBNavbar></DBNavbar>
    <div class="alert alert-danger mb-3" v-if="Errors">
      <i class="fas fa-exclamation-circle" style="font-size:24px"></i>
      <p class="mb-0">{{ Errors }}</p>
    </div>
    <div class="container text-center">
      <h2>Take Editing Task</h2>
      <div v-if="Tasks[0]">
        <div class="d-flex-aic p-2">
          <div :key="task.id" v-for="task in Tasks">
            <button class="btn m-2" @click="getTask(task.id)">{{ task.id }}</button>
          </div>
        </div>
        <div v-if="SelectedTask !== null">
          <div class="card m-auto">
            <img :src="SelectedTask.image" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ SelectedTask.name }}</h5>
              <p class="card-text">{{ SelectedTask.desc }}</p>
              <button class="btn btn-primary" @click="editImage(SelectedTask)">Edit Image</button>
            </div>
          </div>
        </div>
        <div v-else>
          <h5 class="p-2">Select a task</h5>
        </div>
      </div>
      <div v-else class="p-3">
        <h5>No Tasks Created Yet.</h5>
      </div>

      <!-- <div v-if="Tasks[0]" class="TaskList">
        <div class="card" :key="task.id" v-for="task in Tasks">
          <img :src="task.image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ task.name }}</h5>
            <p class="card-text">{{ task.desc }}</p>
            <button class="btn btn-primary" @click="editImage(task)">
              Take Task
            </button>
          </div>
        </div>
      </div>
      <div v-else class="p-3">
        <h3>No Tasks Created Yet.</h3>
      </div>-->
    </div>
  </div>
</template>

<script>
import DBNavbar from "../common/DBNavbar";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EditImages",
  components: {
    DBNavbar
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getSingleTask", "getTasks", "EditImage", "setAlert"]),
    getTask(id) {
      this.getSingleTask(id);
    },
    editImage(task) {
      let edited = {
        taskDetails: task,
        edited: true,
        editorName: localStorage.name,
        editedBy: localStorage.email,
        ratedBy: "",
        rated: false
      };
      this.EditImage(edited);
      this.setAlert("Response Submitted");
      this.getTasks();
    }
  },
  computed: {
    ...mapGetters(["Tasks", "SelectedTask", "Errors"])
  },
  mounted() {
    this.getTasks();
  }
};
</script>

<style></style>
