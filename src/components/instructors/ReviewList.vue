<template>
  <div>
    <DBNavbar></DBNavbar>
    <div class="container">
      <h2>Rate Edited Images</h2>
      <div v-if="EditedList[0]" class="PreviewList">
        <div :key="task.id" v-for="task in EditedList">
          <RateSubmitted v-bind:data="task"></RateSubmitted>
        </div>
      </div>
      <div v-else class="p-3">
        <h5>No Images Edited Yet.</h5>
      </div>
    </div>
  </div>
</template>

<script>
import RateSubmitted from "./RateSubmitted";
import DBNavbar from "../common/DBNavbar";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ReviewImages",
  components: {
    DBNavbar,
    RateSubmitted
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getEdited", "getTasks", "EditImage"])
  },
  computed: {
    ...mapGetters(["Tasks", "EditedList"])
  },
  mounted() {
    this.getEdited();
  }
};
</script>

<style></style>
