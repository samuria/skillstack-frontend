<script>
import { mapState, mapActions } from 'vuex';
import { PERIODS } from '@/store/constants';

export default {
  name: 'JobPeriodSelector',

  data() {
    return {
      open: false,
    };
  },

  computed: {
    ...mapState(['activePeriod']),
  },

  created() {
    this.PERIODS = PERIODS;
  },

  methods: {
    ...mapActions(['setPeriod']),

    onPeriodChanged(value) {
      const newRoute = PERIODS.find((period) => value === period.type).slug;
      this.$router.push(newRoute);
    },
  },
};
</script>

<template>
  <!-- <div class="inline-block relative">
    <div
      :x-data="open"
      @keydown.escape="handleDropDownToggle"
      class="relative inline-block text-left"
    >
      <div>
        <span class="rounded-md shadow-sm">
          <button
            @click="handleDropDownToggle"
            type="button"
            class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
          >
            {{ PERIODS.find((period) => activePeriod === period.type).text }}
            <svg
              class="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>
      <div
        v-show="open"
        x-transition:enter="transition ease-out duration-100"
        x-transition:enter-start="transform opacity-0 scale-95"
        x-transition:enter-end="transform opacity-100 scale-100"
        x-transition:leave="transition ease-in duration-75"
        x-transition:leave-start="transform opacity-100 scale-100"
        x-transition:leave-end="transform opacity-0 scale-95"
        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg"
      >
        <div class="rounded-md bg-white shadow-xs">
          <div class="py-1">
            <router-link
              v-for="period in PERIODS"
              :key="period.type"
              :to="period.slug"
              v-on:click.native="handleDropDownToggle"
              class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >{{ period.text }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <a-select
    class="selector"
    :defaultValue="activePeriod"
    style="width: 160px"
    @change="onPeriodChanged"
  >
    <a-select-option
      v-for="period in PERIODS"
      :key="period.type"
      :value="period.type"
      >{{ period.text }}</a-select-option
    >
  </a-select>
</template>

<style scoped>
.selector {
  margin-left: 25px;
}

.form {
  border: 1px solid red;
}
</style>
