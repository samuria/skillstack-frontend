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
  <a-layout-content style="padding: 20px 50px; background-color: #fff">
    <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
      <recent-jobs-list />
    </div>
  </a-layout-content>
</template>

<style scoped></style>
