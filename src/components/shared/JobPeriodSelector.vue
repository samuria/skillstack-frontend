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

    // setActiveButton() {
    //   if
    // }
  }
};
</script>

<template>
  <section class="pt-8 pb-2">
    <div class="flex flex-wrap justify-between">
      <div class="w-full lg:w-4/6">
        <ul
          class="flex flex-wrap items-center -mx-1 text-xs lg:text-sm text-gray-600"
        >
          <li
            v-for="period in PERIODS"
            :key="period.type"
            :class="{
              'bg-indigo-600 text-white': activePeriod === period.type
            }"
            class="text-center flex-1 md:w-1/3 mx-1 bg-gray-300 rounded"
          >
            <router-link
              :to="`/${period.slug}`"
              class="py-3 block font-semibold"
              >{{ period.text }}</router-link
            >
          </li>
        </ul>
      </div>
      <div class="flex justify-end w-full lg:w-1/6 text-xs lg:text-sm">
        <router-link
          to="/#"
          class="w-full text-center text-gray-700 font-medium py-3 rounded mt-3 lg:m-0"
          ><font-awesome-icon icon="plus" size="sm" /> See all
          posts</router-link
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
@media only screen and (max-width: 767px) {
  .btn-see-all-posts {
    margin-top: 10px;
    width: 100%;
  }
}

.secondary-selector-container {
  display: flex;
  justify-content: flex-end;
}
</style>
