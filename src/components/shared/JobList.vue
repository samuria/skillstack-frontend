<script>
import JobItem from './JobItem';
import NoJobsAlert from './NoJobsAlert';

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
    JobItem,
    NoJobsAlert
  }
};
</script>

<template>
  <section class="pb-10">
    <no-jobs-alert v-if="posts.length === 0" />
    <job-item v-else v-for="post in posts" :key="post.slug" :post="post" />
  </section>
</template>

<style></style>
