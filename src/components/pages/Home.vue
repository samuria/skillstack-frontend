<script>
import RecentJobsList from '../shared/RecentJobsList';
export default {
  name: 'Home',
  components: {
    RecentJobsList
  }
};
</script>

<template>
  <section class="lg:px-4 md:px-20 pt-10">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full md:w-4/6">
          <recent-jobs-list />
        </div>
        <div class="w-full md:w-2/6">
          Featured post
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
