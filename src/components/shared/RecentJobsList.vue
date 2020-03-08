<script>
import { mapState, mapActions } from "vuex";
import JobList from "./JobList";
import JobPeriodSelector from "./JobPeriodSelector";
import { PERIODS } from "@/store/constants";

export default {
  name: "RecentJobsList",
  components: {
    JobList,
    JobPeriodSelector
  },
  data() {
    return {
      isLoading: false,
      defaultTab: ""
    };
  },
  computed: {
    ...mapState(["recentPosts", "activePeriod"])
  },
  methods: {
    ...mapActions(["fetchRecentJobs", "setPeriod"]),
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
  <section>
    <div class="sm:mt-32 py-6 flex justify-between">
      <h3 class="font-medium text-xl select-none">Latest posts</h3>
      <job-period-selector />
    </div>
    <div :style="{ minHeight: '500px' }">
      <loading-spinner v-if="isLoading" />
      <job-list v-else :posts="recentPosts" />
    </div>
  </section>
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
