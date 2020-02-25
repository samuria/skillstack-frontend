<script>
import JobList from "../shared/JobList";

export default {
  components: {
    JobList
  },

  props: {
    posts: {
      type: Array,
      required: true
    },
    meta: {
      type: Object,
      required: false
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<template>
  <div class="lg:px-4 md:px-20 mt-10">
    <div class="container">
      <loading-spinner v-if="isLoading" />
      <job-list v-else :posts="posts" />
    </div>
  </div>
</template>

<style></style>
