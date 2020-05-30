<script>
import RecentJobsList from '../shared/RecentJobsList';
export default {
  name: 'Home',
  components: {
    RecentJobsList,
  },
};
</script>

<template>
  <!-- <article class="max-w-7xl mx-auto py-24 px-6 lg:px-8 bg-gray-200">
    <div class="container">
      <recent-jobs-list />
    </div>
  </article> -->
  <a-layout-content style="padding: 30px 0">
    <a-layout style="background: #fff">
      <a-layout-sider width="200" style="background: #fff; padding-top: 12px;">
        <h3 style="padding-bottom: 20px;">Job offers (1,245)</h3>

        <div class="filters-title">
          <h4>Filter by:</h4>
          <a-button type="link" size="small">Clear filters</a-button>
        </div>
      </a-layout-sider>
      <recent-jobs-list />
    </a-layout>
  </a-layout-content>
</template>

<style scoped>
.filters-title {
  display: flex;
  justify-content: space-between;
}
</style>
