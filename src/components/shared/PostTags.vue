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
  <div>
    <router-link
      v-for="tag in tags"
      :key="tag.name"
      :to="'/tag/' + tag.slug"
      class="text-xs font-medium bg-indigo-100 text-indigo-500 ml-1 px-2 py-1 rounded border border-indigo-400 hover:text-indigo-600"
      >{{ tag.name }}</router-link
    >
  </div>
</template>

<style></style>
