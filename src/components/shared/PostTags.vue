<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
};
</script>

<template>
  <div class="text-xs font-medium text-blue-600">
    <router-link
      v-for="tag in tags"
      :key="tag.name"
      :to="'/tag/' + tag.slug"
      class="inline-block bg-indigo-100 px-2 rounded-full ml-1 hover:bg-blue-200"
      >{{ tag.name }}</router-link
    >
  </div>
</template>

<style></style>
