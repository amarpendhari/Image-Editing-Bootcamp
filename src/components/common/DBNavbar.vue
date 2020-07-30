<template>
  <div>
    <nav class="navbar">
      <div>
        <h2 v-if="User.type === 'Instructor'">Instructor Dashboard</h2>
        <h2 v-else>Student Dashboard</h2>
      </div>
      <div v-if="User.type === 'Instructor'">
        <ul class="d-flex-aic">
          <li>
            <router-link class="btn mr-2" to="/dashboard">Create Task</router-link>
          </li>
          <li>
            <router-link class="btn mr-2" to="/dashboard/tasklist">Task List</router-link>
          </li>
          <li>
            <router-link class="btn mr-2" to="/dashboard/review">Rate Edited Images</router-link>
          </li>
          <li>
            <button class="bg-success btn text-white" @click="LogOut">Logout</button>
          </li>
        </ul>
      </div>
      <div v-else>
        <ul class="d-flex-aic">
          <li>
            <router-link class="btn mr-2" to="/dashboard">Tutorials</router-link>
          </li>
          <li>
            <router-link class="btn mr-2" to="/dashboard/editImages">Task List</router-link>
          </li>
           <li>
            <router-link class="btn mr-2" to="/dashboard/ratedImages">Rated Images</router-link>
          </li>
          <li>
            <button class="bg-success btn text-white" @click="LogOut">Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "DBNavbar",
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions(["Logout"]),
    LogOut() {
      this.Logout();
    }
  },
  computed: {
    ...mapGetters(["User", "Errors"])
  }
};
</script>

<style></style>
