<script>
export default {
  name: 'JobDetails',

  components: {},

  props: {
    preview: {
      type: Boolean,
      required: false,
      default: false
    },
    previewData: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },

  data() {
    return {
      post: null,
      isLoading: true,
      notFound: false,
      relatedPosts: []
    };
  },

  computed: {
    postData() {
      return Object.keys(this.previewData).length
        ? this.previewData
        : this.post;
    }
  }
};
</script>

<template>
  <div
    class="container mx-auto px-4 py-16 md:px-24 lg:px-32 xl:px-32 2xl:px-64 w-full text-2xl lg:text-3xl text-gray-800"
    itemscope
    itemtype="http://schema.org/JobPosting"
  >
    Hi<bounce-loader v-if="isLoading" />
  </div>
</template>

<style></style>
