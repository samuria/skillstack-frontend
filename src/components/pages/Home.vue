<script>
import RecentJobsList from "../shared/RecentJobsList";
export default {
  name: "Home",
  components: {
    RecentJobsList
  }
};
</script>

<template>
  <article class="max-w-7xl mx-auto py-24 px-6 lg:px-8 bg-gray-200">
    <div class="container">
      <recent-jobs-list />
    </div>
  </article>
</template>

<style scoped></style>
