<script>
import bannerTags from "@/assets/data/banner-tags";

export default {
  name: "AppBanner",
  props: {
    withBanner: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      skillTags: [],
      locationTags: []
    };
  },
  methods: {
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    }
  },

  computed: {
    firstTags() {
      return bannerTags.skills;
    },
    secondTags() {
      return bannerTags.locations;
    }
  },

  created() {
    this.skillTags = this.firstTags;
    this.locationTags = this.secondTags;
  }
};
</script>

<template>
  <!-- <section class="banner h-56 px-4 pt-10 bg-gray-800">
    <div class="container">
      <div class="w-3/5">
        <h2 class="text-3xl font-bold leading-tight text-white">
          Search
        </h2>
        <p class="text-sm text-gray-600">
          <span class="font-bold">Developers first.</span> You'll never receive
          recruiter spam or see fake job listings on our site.
        </p>
      </div>
      <div
        class="flex flex-wrap border-4 border-gray-100 mt-5 p-6 bg-white rounded-md shadow-xl"
      >
        <div class="w-full flex-auto md:w-2/5">
          <input
            type="text"
            class="w-full px-2 md:px-4 py-2 md:py-4 rounded bg-gray-200 text-gray-700 border outline-none focus:shadow-outline"
            placeholder="Position, company, skills..."
          />
        </div>
        <div class="w-full md:w-2/5 sm:my-3 md:mx-3">
          <input
            type="text"
            class="w-full px-2 md:px-4 py-2 md:py-4 rounded bg-gray-200 text-gray-700 border outline-none focus:shadow-outline"
            placeholder="Location"
          />
        </div>
        <div class="w-full flex md:w-1/12">
          <button
            class="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded py-2 shadow-md"
          >
            <font-awesome-icon icon="search" />
          </button>
        </div>
        <div class="flex flex-col text-xs font-medium -ml-1 text-blue-700">
          <div class="flex mt-4">
            <a
              href="#"
              class="bg-blue-100 px-2 rounded-full ml-1"
              v-for="tag in skillTags"
              :key="tag"
              >{{ tag }}</a
            >
          </div>
          <div class="flex mt-1">
            <a
              href="#"
              class="bg-blue-100 px-2 rounded-full ml-1"
              v-for="tag in locationTags"
              :key="tag"
              >{{ tag }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <section class="banner">
    <h1>
      Looking for a job in IT?
    </h1>
    <p>
      Search among <span>24,482</span> offers from the best employers in
      Australia.
    </p>
    <a-button type="primary">View jobs</a-button>
  </section>
</template>

<style scoped>
.banner {
  height: 200px;
  background-color: #e1f6ff;
  border-radius: 5px;
  padding: 40px 40px;
}
</style>
