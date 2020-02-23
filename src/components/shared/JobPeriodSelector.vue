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
    <div class="flex flex-wrap justify-between font-medium">
      <div class="w-full lg:w-2/6">
        <ul
          class="flex flex-wrap items-center -mx-1 text-xs lg:text-sm text-gray-600 list-none pl-0"
        >
          <li
            v-for="(period, index) in PERIODS"
            :key="period.type"
            :class="{
              'bg-indigo-600 text-white': activePeriod === period.type,
              'rounded-l': index === 0,
              'rounded-r': index === 2
            }"
            class="text-center flex-1 md:w-1/3 mx-px bg-gray-300 "
          >
            <router-link
              :to="`/${period.slug}`"
              class="py-3 block font-medium"
              >{{ period.text }}</router-link
            >
          </li>
        </ul>
      </div>
      <div
        class="flex justify-end w-full lg:w-1/6 text-xs lg:text-sm text-gray-600"
      >
        <router-link
          to="/#"
          class="w-full text-center py-3 rounded mt-3 lg:m-0 bg-gray-200"
          ><font-awesome-icon icon="plus" size="sm" /> See all
          posts</router-link
        >
      </div>
    </div>
  </section>
</template>

<style scoped></style>
