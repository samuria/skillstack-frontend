<script>
import { mapActions } from 'vuex';
import JobListingWithFilters from '../shared/JobListingWithFilters';

export default {
  components: {
    JobListingWithFilters
  },

  data() {
    return {
      isLoading: true,
      slug: null || this.$route.params.slug,
      posts: []
    };
  },

  watch: {
    slug: function() {
      this.handleSearch();
    }
  },

  methods: {
    ...mapActions(['fetchByTag']),
    handleSearch() {
      this.fetchByTag(this.slug)
        .then(res => {
          this.posts = res;
        })
        .finally(() => (this.isLoading = false));
    }
  },

  created() {
    this.handleSearch();
  },

  beforeRouteUpdate(to, from, next) {
    this.isLoading = true;
    this.slug = to.params.slug;
    this.handleSearch;

    next();
  },

  beforeRouteLeave() {
    location.reload();
  }
};
</script>

<template>
  <job-listing-with-filters :posts="posts" :is-loading="isLoading" />
</template>

<style></style>
