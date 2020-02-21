<script>
import { mapState, mapActions } from 'vuex';
import JobList from './JobList';
import JobPeriodSelector from './JobPeriodSelector';
import { PERIODS } from '@/store/constants';

export default {
  name: 'RecentJobsList',
  components: {
    JobList,
    JobPeriodSelector
  },
  data() {
    return {
      isLoading: false,
      defaultTab: ''
    };
  },
  computed: {
    ...mapState(['recentPosts', 'activePeriod'])
  },
  methods: {
    ...mapActions(['fetchRecentJobs', 'setPeriod']),
    fetch() {
      this.isLoading = true;

      this.fetchRecentJobs().then(() => {
        this.isLoading = false;
      });
    },

    setPeriodHandler() {
      const period = PERIODS.find(p => p.type === this.$route.meta.period);
      if (period) {
        this.setPeriod(period.type);
      }
      this.fetch();
    },

    periodChange(key) {
      this.$router.push(key);
    }
  },
  watch: {
    $route(to, from) {
      if (to.meta.period !== from.meta.period) this.setPeriodHandler();
    }
  },

  created() {
    this.setPeriodHandler();
    this.PERIODS = PERIODS;
  }
};
</script>

<template>
  <!-- <a-row type="flex" justify="space-between" :gutter="32">
    <a-col :span="24" :md="{ span: '16' }">
      <h2>Latest posts</h2>
      <job-period-selector />
      <div class="list-container">
        <a-spin type="loading" v-if="isLoading" class="spinner" />
        <a-empty
          v-else-if="recentPosts.length === 0"
          description="No jobs found."
          class="empty-message"
        />
        <job-list v-else :posts="recentPosts" />
      </div>
      <div v-if="recentPosts.length > 0" class="recent-jobs-footer">
        <a-button type="primary" size="large">See all posts</a-button>
      </div>
    </a-col>
    <a-col :span="8"><h2>Featured posts</h2></a-col>
  </a-row> -->
  <div class="container">
    <h2 class="text-lg font-semibold">Latest posts</h2>
    <job-period-selector />
    <div class="pt-4" :style="{ minHeight: '500px' }">
      <job-list :posts="recentPosts" />
    </div>
  </div>
</template>

<style scoped>
.list-container {
  display: flex;
  flex-direction: column;
}

.recent-jobs-footer {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.btn-show-all-jobs-mobile {
  width: 100%;
}

.spinner,
.empty-message {
  margin-top: 50px;
}
</style>
