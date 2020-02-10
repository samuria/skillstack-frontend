<script>
import { mapState, mapActions } from 'vuex';
// import JobList from './JobList';
import JobPeriodSelector from './JobPeriodSelector';
import { PERIODS } from '@/store/constants';

export default {
  name: 'RecentJobsList',
  components: {
    // JobList,
    JobPeriodSelector
  },
  data() {
    return {
      isLoading: false
    };
  },
  computed: {
    ...mapState(['recentPosts', 'activePeriod'])
  },
  methods: {
    ...mapActions(['setPeriod']),

    setPeriodHandler() {
      const period = PERIODS.find(p => p.type === this.$route.meta.period);
      if (period) {
        this.setPeriod(period.type);
      }
    }
  },
  watch: {
    $route(to, from) {
      if (to.meta.period !== from.meta.period) this.setPeriodHandler();
    }
  },
  created() {
    this.setPeriodHandler();
  }
};
</script>

<template>
  <!-- <div class="flex flex-wrap">
    <div class="w-full md:w-2/3">
      <h2 class="text-xl text-gray-700">Latest ads</h2>
      <job-period-selector />
      <job-list :is-loading="isLoading" :posts="recentPosts" />
    </div>
    <div class="w-full md:w-1/3">
      <h3 class="text-xl text-gray-700">Featured posts</h3>
    </div>
  </div> -->
  <a-row type="flex" justify="space-between">
    <a-col :span="18"
      ><h2>Latest posts</h2>
      <job-period-selector
    /></a-col>
    <a-col :span="5"><h2>Featured posts</h2></a-col>
  </a-row>
</template>

<style></style>
