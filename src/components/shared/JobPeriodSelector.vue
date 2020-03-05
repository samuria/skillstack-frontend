<script>
import { mapState, mapActions } from 'vuex';
import { PERIODS } from '@/store/constants';

export default {
  name: 'JobPeriodSelector',
  computed: {
    ...mapState(['activePeriod'])
  },
  created() {
    this.PERIODS = PERIODS;
  },
  methods: {
    ...mapActions(['setPeriod'])
  }
};
</script>

<template>
  <section class="pt-8 pb-2">
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
  </section>
</template>

<style scoped></style>
