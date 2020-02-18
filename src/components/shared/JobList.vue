<script>
import JobItem from './JobItem';

export default {
  name: 'JobList',
  props: {
    isLoading: {
      type: Boolean,
      required: false,
      default: false
    },
    posts: {
      type: Array,
      required: true
    },
    // TODO: check if this is needed
    notFoundText: {
      type: String,
      required: false,
      default: 'No jobs found.'
    }
  },
  components: {
    JobItem
  }
};
</script>

<template>
  <section>
    <job-item v-for="post in posts" :key="post.slug" :post="post" />
  </section>
</template>

<style></style>
