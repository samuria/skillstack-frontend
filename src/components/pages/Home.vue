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
  <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
    <recent-jobs-list />
  </div>
</template>

<style scoped></style>
