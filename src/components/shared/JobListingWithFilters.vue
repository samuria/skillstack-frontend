<script>
import JobList from '../shared/JobList';

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
  <job-list :posts="posts" />
</template>

<style></style>
