<script>
import { mapActions } from "vuex";
import JobListingWithFilters from "../shared/JobListingWithFilters";

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
    ...mapActions(["fetchByTag"]),
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
  }
};
</script>

<template>
  <section>
    <div class="border-b lg:px-4 md:px-20 bg-gray-800">
      <div class="container">
        <div class="flex flex-wrap py-16">
          <div class="w-full md:w-2/3">
            <h2
              class="flex items-center text-xl md:text-2xl font-medium text-white"
            >
              Jobs tagged
              <span
                class="inline-block text-xs font-medium text-blue-600 bg-blue-200 px-3 rounded-full ml-3"
                >{{ this.slug }}</span
              >
            </h2>
            <h3>
              <span class="text-gray-500">
                There are {{ this.posts.length }} posts matching this criteria
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <job-listing-with-filters :posts="posts" :is-loading="isLoading" />
  </section>
</template>

<style></style>
