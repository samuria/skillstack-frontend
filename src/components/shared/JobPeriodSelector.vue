<script>
import { mapState, mapActions } from "vuex";
import { PERIODS } from "@/store/constants";

export default {
  name: "JobPeriodSelector",
  computed: {
    ...mapState(["activePeriod"])
  },
  created() {
    this.PERIODS = PERIODS;
  },
  methods: {
    ...mapActions(["setPeriod"]),

    onPeriodChanged(event) {
      this.$router.push(event.target.value);
    }
  }
};
</script>

<template>
  <!-- <section class="pt-8 pb-2">
    <div class="flex flex-wrap justify-between font-semibold text-xs">
      <div class="sm:w-full">
        <ul
          class="flex flex-row items-center md:text-sm text-gray-600 list-none"
        >
          <router-link
            :to="`/${period.slug}`"
            v-for="(period, index) in PERIODS"
            :key="period.type"
            tag="li"
            :class="{
              'bg-indigo-600 text-white': activePeriod === period.type,
              'rounded-l border-r-0': index === 0,
              'rounded-r border-l-0': index === PERIODS.length - 1
            }"
            class="text-center sm:flex-1 cursor-pointer select-none border border-gray-400 px-4 py-2"
            >{{ period.text }}</router-link
          >
        </ul>
      </div>
      <div class="flex sm:w-full md:text-sm text-gray-600">
        <router-link
          to="/#"
          class="w-full text-center py-2 px-4 rounded mt-1 md:m-0 border border-gray-400"
          ><span>See all posts</span></router-link
        >
      </div>
    </div>
  </section> -->

  <!-- <select
    class="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
  >
    <option v-for="period in PERIODS" :key="period.type">{{
      period.text
    }}</option>
  </select> -->
  <div class="inline-block relative">
    <select
      @change="onPeriodChanged($event)"
      class="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
    >
      <option
        v-for="period in PERIODS"
        :key="period.type"
        :value="period.slug"
        >{{ period.text }}</option
      >
    </select>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
    >
      <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped></style>
