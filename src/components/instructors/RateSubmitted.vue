<template>
  <div>
    <div>
      <div v-if="EditedList[0]" class="PreviewList">
        <div class="card">
          <img :src="data.taskDetails.image" class="card-img-top" alt="..." />
          <div class="card-body">
            Edited By
            <h5 class="card-title">
              {{ data.editorName }}
              <i>({{ data.editedBy }})</i>
            </h5>
            <h6>Task Name - {{ data.taskDetails.name }}</h6>
            <p class="card-text">Task Details - {{ data.taskDetails.desc }}</p>
            <div v-if="data.rated === true" class="Rated">
              <star-rating
                :star-size="23"
                :max-rating="10"
                read-only
                :rating="data.rating"
              ></star-rating>
              <h5 class="p-2">Rated By - {{ data.ratedBy }}</h5>
            </div>
            <div v-else>
              <star-rating
                :star-size="23"
                v-model="rating"
                :max-rating="10"
                :increment="0.5"
              ></star-rating>
              <h6>Selected Rating: {{ rating }}</h6>
              <button class="btn btn-primary" @click="SubmitRating(data)">
                Rate Image
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="p-3">
        <h3>No Tasks Created Yet.</h3>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "RateSubmitted",
  props: ["data"],
  components: {
    StarRating
  },
  data() {
    return {
      rating: 5
    };
  },
  methods: {
    ...mapActions(["getEdited", "RateImage", "EditImage"]),
    SubmitRating(data) {
      (data.rating = this.rating),
        (data.rated = true),
        (data.ratedBy = localStorage.name);
      this.RateImage(data);
    }
  },
  computed: {
    ...mapGetters(["Tasks", "EditedList"])
  }
};
</script>

<style></style>
