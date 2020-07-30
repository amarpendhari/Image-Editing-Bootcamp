<template>
  <div>
    <DBNavbar></DBNavbar>
    <div class="container">
      <h2>Rated Images</h2>
      <div v-if="EditedList[0]" class="PreviewList">
        <div :key="list.id" v-for="list in ratedList">
          <div class="card">
            <img :src="list.taskDetails.image" class="card-img-top" alt="..." />
            <div class="card-body">
              Edited By
              <h5 class="card-title">
                {{ list.editorName }}
                <i>({{ list.editedBy }})</i>
              </h5>
              <h6>Task Name - {{ list.taskDetails.name }}</h6>
              <p class="card-text">Task Details - {{ list.taskDetails.desc }}</p>
              <div v-if="list.rated === true" class="Rated">
                <star-rating :star-size="23" :max-rating="10" read-only :rating="list.rating"></star-rating>
                <h5 class="p-2">Rated By - {{ list.ratedBy }}</h5>
              </div>
              <div v-else>
                <h5 class="p-2">Resposnse Not Rated yet.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="p-2">
        <h5>No Data Available.</h5>
      </div>
    </div>
  </div>
</template>

<script>
import DBNavbar from "../common/DBNavbar";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "RatedImages",
  components: {
    DBNavbar
  },
  data() {
    return {
      ratedList: []
    };
  },
  methods: {
    ...mapActions(["getEdited", "getTasks", "EditImage"])
  },
  computed: {
    ...mapGetters(["Tasks", "EditedList"])
  },
  mounted() {
    this.getEdited();
    this.ratedList = this.EditedList.filter(
      list => list.editedBy === localStorage.email
    );
  }
};
</script>

<style></style>
