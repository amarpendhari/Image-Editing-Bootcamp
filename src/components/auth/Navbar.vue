<template>
  <nav class="navbar">
    <div>
      <h2>Truexam - Image Editing Bootcamp</h2>
    </div>
    <ul>
      <li>
        <router-link class to="/login">Login</router-link>
      </li>
      <li>
        <router-link class to="/register">Register</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style></style>
