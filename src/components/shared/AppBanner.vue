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
    handleChange(value) {
      console.log(`selected ${value}`);
    },
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
  <!-- <section class="border-b py-12 lg:px-4 md:px-20 pt-10">
    <div class="container">
      <h2 class="text-3xl font-medium">Search</h2>
      <div class="flex flex-wrap pt-4">
        <div class="w-full flex-auto md:w-2/5">
          <input
            type="text"
            class="w-full outline-none px-2 md:px-4 py-2 md:py-4 rounded text-gray-700 font-medium border-2 border-gray-400 hover:border-gray-500 focus:border-gray-700"
            placeholder="Position, technology"
            spellcheck="false"
          />
        </div>
        <div class="w-full md:w-2/5 sm:my-3 md:mx-3">
          <input
            type="text"
            class="w-full outline-none px-2 md:px-4 py-2 md:py-4 rounded text-gray-700 font-medium border-2 border-gray-400 hover:border-gray-500 focus:border-gray-700"
            placeholder="Location"
          />
        </div>
        <div class="w-full flex md:w-1/12">
          <button
            class="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded py-2"
          >
            <font-awesome-icon icon="search" />
          </button>
        </div>
      </div>
      <div class="flex mt-4 text-sm text-gray-700 -ml-1">
        <a
          href="#"
          class="border-2 hover:border-gray-500 px-2 py-1 rounded ml-1"
          v-for="tag in skillTags"
          :key="tag"
          >{{ tag }}</a
        >
      </div>
      <div class="flex mt-1 text-sm text-gray-700 -ml-1">
        <a
          href="#"
          class="border-2 hover:border-gray-500 px-2 py-1 rounded ml-1"
          v-for="tag in locationTags"
          :key="tag"
          >{{ tag }}</a
        >
      </div>
    </div>
  </section> -->
  <section class="banner h-64 flex flex-col items-center justify-center">
    <div class="flex">
      <h2 class="text-white text-xl md:w-4/6 font-semibold">
        <span class="font-bold text-indigo-200 underline"
          >Developers first.</span
        >
        You’ll never receive recruiter spam or see fake job listings on our
        site.
      </h2>
    </div>
    <div
      class="w-full md:w-4/6 border-4 border-gray-100 flex flex-wrap -mb-24 mt-8 p-6 bg-white rounded-md shadow-xl"
    >
      <div class="w-full flex-auto md:w-2/5">
        <input
          type="text"
          class="w-full outline-none px-2 md:px-4 py-2 md:py-4 rounded bg-gray-200 text-gray-700"
          placeholder="Position, company, skills..."
        />
      </div>
      <div class="w-full md:w-2/5 sm:my-3 md:mx-3">
        <input
          type="text"
          class="w-full outline-none px-2 md:px-4 py-2 md:py-4 rounded bg-gray-200 text-gray-700"
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
  </section>
</template>

<style scoped>
.banner {
  background: linear-gradient(#035581, #035581),
    url(../../assets/images/hero-bg.jpg);
  background-size: cover;
  background-position-y: 25%;
  background-blend-mode: multiply;
}
</style>
