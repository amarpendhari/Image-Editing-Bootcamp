<template>
  <div>
    <DBNavbar></DBNavbar>
    <div v-if="User.type === 'Instructor'">
      <InstructorsDB></InstructorsDB>
    </div>
    <div v-else>
      <StudentsDB></StudentsDB>
    </div>
  </div>
</template>

<script>
import { vm } from "@/main";
import { mapGetters, mapActions } from "vuex";
import DBNavbar from "../common/DBNavbar";
import StudentsDB from "../students/StudentsDB";
import InstructorsDB from "../instructors/InstructorDB";
export default {
  name: "Dashboard",
  components: { StudentsDB, InstructorsDB, DBNavbar },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["logIN", "loadUser"])
  },
  computed: {
    ...mapGetters(["User", "Errors"])
  },
  mounted() {
    if (localStorage.email) {
      this.logIN(localStorage.email);
    } else {
      vm.$router.push({ path: "/login" }).catch(() => {});
    }
  }
};
</script>

<style></style>
