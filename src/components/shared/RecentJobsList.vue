<script>
import { mapState, mapActions } from 'vuex';
import JobList from './JobList';
// import JobPeriodSelector from './JobPeriodSelector';
import { PERIODS } from '@/store/constants';

export default {
  name: 'RecentJobsList',
  components: {
    JobList
    // JobPeriodSelector
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
  <a-row type="flex" justify="space-between" :gutter="32">
    <a-col :span="24" :md="{ span: '16' }"
      ><h2>Latest posts</h2>
      <a-tabs @change="periodChange" defaultActiveKey="month" :animated="false">
        <a-tab-pane
          v-for="period in PERIODS"
          :key="period.slug"
          :tab="period.text"
        >
          <p>{{ activePeriod }}</p>
          <a-spin v-if="isLoading" size="large" tip="Loading" class="spinner" />
          <a-empty
            v-else-if="recentPosts.length === 0"
            description="No jobs found."
          />

          <job-list v-else :posts="recentPosts" />
        </a-tab-pane>
        <a-button slot="tabBarExtraContent">See all posts</a-button>
      </a-tabs>
      <!-- <job-period-selector /> -->
    </a-col>
    <a-col :span="8"><h2>Featured posts</h2></a-col>
  </a-row>
</template>

<style scoped>
.spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn-show-all-jobs-mobile {
  width: 100%;
}
</style>
