<template>
  <div>
    <Navbar></Navbar>
    <div class="text-center">
      <div class="alert alert-danger mb-3" v-if="Errors">
        <i class="fas fa-exclamation-circle" style="font-size:24px"></i>
        <p class="mb-0">{{ Errors }}</p>
      </div>
      <div class="Form">
        <h2 class="mb-3">Registration Form</h2>
        <form method="post" @submit.prevent="SubmitForm" class="form">
          <div class="d-flex-aic">
            <input type="radio" value="User" v-model="type" />
            <label class="lead mr-15" for="User">User</label>

            <input type="radio" value="Instructor" v-model="type" />
            <label class="lead" for="Instructor">Instuctor</label>
          </div>
          <input type="text" placeholder="Name" v-model="name" required />
          <input type="email" placeholder="Email" v-model="email" required />
          <input type="password" placeholder="Password" v-model="password" required />
          <input type="password" placeholder="Confirm Password" v-model="confirm" required />
          <button class="btn btn-success">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Navbar from "./Navbar";
export default {
  name: "Register",
  components: {
    Navbar
  },
  data() {
    return {
      type: "User",
      name: "",
      email: "",
      password: "",
      confirm: ""
    };
  },
  methods: {
    ...mapActions(["registerUser", "setAlert", "getUsers"]),
    SubmitForm(e) {
      e.preventDefault();
      if (this.password != this.confirm) {
        this.setAlert("Confirm Password and Password do not match");
      } else if (
        this.$store.getters.Users.find(user => this.email === user.email)
      ) {
        this.setAlert("Email ID has been used. Try again");
      } else {
        let user = {
          type: this.type,
          name: this.name,
          email: this.email,
          password: this.password
        };
        console.log(user);
        this.registerUser(user);
      }
    }
  },
  mounted() {
    this.getUsers();
  },
  computed: {
    ...mapGetters(["Users", "Errors"])
  }
};
</script>

<style></style>
