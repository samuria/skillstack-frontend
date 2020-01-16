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
  <div id="home">
    <div
      class="container mx-auto px-4 py-10 md:px-24 lg:px-32 xl:px-32 2xl:px-64 xl:py-12 w-full"
    >
      <recent-jobs-list />
    </div>
  </div>
</template>

<style scoped></style>
