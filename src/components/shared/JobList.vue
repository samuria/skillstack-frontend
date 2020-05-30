<script>
import JobItem from "./JobItem";
import NoJobsAlert from "./NoJobsAlert";

export default {
  name: "JobList",
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
      default: "No jobs found."
    }
  },
  components: {
    JobItem,
    NoJobsAlert
  },
  computed: {
    lastPost: function() {
      return Object.keys(this.posts).length - 1;
    }
  },

  data() {
    return {
      // pagination: {
      //   onChange: (page) => {
      //     console.log(page);
      //   },
      //   pageSize: 3,
      // },
    };
  }
};
</script>

<template>
  <section class="rounded bg-white shadow">
    <no-jobs-alert v-if="posts.length === 0" />
    <a-list v-else itemLayout="vertical" size="small" :dataSource="posts">
      <job-item v-for="post in posts" :key="post.slug" :post="post" />
    </a-list>
  </section>
</template>

<style></style>
