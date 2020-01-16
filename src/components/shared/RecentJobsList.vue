<script>
import { mapState, mapActions } from "vuex";
import JobListing from "./JobListing";
import JobPeriodSelector from "./JobPeriodSelector";
import { PERIODS } from "@/store/constants";

export default {
  name: "RecentJobsList",
  components: {
    JobListing,
    JobPeriodSelector
  },
  computed: {
    ...mapState(["activePeriod"])
  },
  methods: {
    ...mapActions(["setPeriod"]),

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
  <div class="flex flex-wrap">
    <div class="w-full md:w-2/3">
      <h3 class="text-xl text-gray-700">Latest ads</h3>
      <job-period-selector />
      <job-listing />
    </div>
    <div class="w-full md:w-1/3">
      <h3 class="text-xl text-gray-700">Featured posts</h3>
    </div>
  </div>
</template>

<style></style>
