<template>
  <div>
    <DBNavbar></DBNavbar>
    <div class="container text-center">
      <h2>TaskList</h2>
      <div v-if="Tasks[0]" class="TaskList">
        <div class="card" :key="task.id" v-for="task in Tasks">
          <img :src="task.image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ task.name }}</h5>
            <p class="card-text">{{ task.desc }}</p>
          </div>
        </div>
      </div>
      <div v-else class="p-3">
        <h5>No Tasks Created Yet.</h5>
      </div>
    </div>
  </div>
</template>

<script>
import DBNavbar from "../common/DBNavbar";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "TaskList",
  components: {
    DBNavbar
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getUsers", "getTasks"])
  },
  computed: {
    ...mapGetters(["Tasks"])
  },
  mounted() {
    this.getTasks();
  }
};
</script>

<style></style>
