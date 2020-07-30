<template>
  <div>
    <Navbar></Navbar>
    <div class="text-center mt-3">
      <div class="alert alert-danger mb-4" v-if="Errors">
        <i class="fas fa-exclamation-circle" style="font-size:24px"></i>
        <p class="mb-0">{{ Errors }}</p>
      </div>
      <div class="Form">
        <h2 class="p-2">Login</h2>
        <form method="post" @submit.prevent="SubmitForm" class="form">
          <input type="email" placeholder="Email" v-model="email" required />
          <input type="password" placeholder="Password" v-model="password" required />
          <button class="btn btn-success">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Navbar from "./Navbar";
export default {
  name: "Login",
  components: {
    Navbar
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["logIN", "setAlert", "getUsers"]),
    SubmitForm(e) {
      e.preventDefault();
      if (
        this.$store.getters.Users.find(
          user => user.email === this.email && user.password === this.password
        )
      ) {
        this.logIN(this.email);
      } else {
        this.setAlert("Invalid Credentials");
      }
    }
  },
  computed: {
    ...mapGetters(["Users", "Errors"])
  },
  mounted() {
    this.getUsers();
  }
};
</script>

<style></style>
