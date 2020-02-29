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
    <div class="flex flex-wrap justify-between font-bold">
      <div class="w-full md:w-3/6">
        <ul
          class="flex flex-wrap items-center -mx-1 text-xs lg:text-sm text-gray-600 list-none px-2 py-2 bg-gray-200 rounded"
        >
          <router-link
            :to="`/${period.slug}`"
            v-for="period in PERIODS"
            :key="period.type"
            tag="li"
            :class="{
              'bg-white text-blue-600 shadow': activePeriod === period.type
            }"
            class="text-center flex-1 md:w-1/3 mx-px py-3 rounded cursor-pointer select-none"
            >{{ period.text }}</router-link
          >
          <!-- <li
            v-for="period in PERIODS"
            :key="period.type"
            :class="{
              'bg-white text-blue-600': activePeriod === period.type
            }"
            class="text-center flex-1 md:w-1/3 mx-px bg-gray-300 bg-white"
          ></li> -->
        </ul>
      </div>
      <div
        class="flex flex-wrap justify-end items-center w-full md:w-1/6 text-xs lg:text-sm text-white"
      >
        <router-link
          to="/#"
          class="w-full align-middle text-center py-3 rounded mt-3 lg:m-0 bg-indigo-600"
          ><span>See all posts</span></router-link
        >
      </div>
    </div>
  </section>
</template>

<style scoped></style>
