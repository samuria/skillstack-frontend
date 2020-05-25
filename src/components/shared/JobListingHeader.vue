
<script>
export default {
  name: "JobListingHeader",
  props: ["post"]
};
</script>

<template>
  <div class="lg:flex lg:items-center lg:justify-between">
    <div class="flex-1 min-w-0">
      <h2
        class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:leading-9"
      >
        {{ post.position }}
      </h2>
      <div class="mt-1 flex flex-col sm:mt-0 md:flex-row sm:flex-wrap">
        <div
          class="mt-2 flex items-center text-sm leading-5 text-gray-500 md:mr-6"
        >
          <svg
            class="flex-shrink-0 mr-1 h-5 w-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
            <path
              d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
            />
          </svg>
          {{ post.type }}
        </div>
        <div
          class="mt-2 flex items-center text-sm leading-5 text-gray-500 md:mr-6"
        >
          <svg
            class="flex-shrink-0 mr-1 h-5 w-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            />
          </svg>
          {{ post.location }}
        </div>
        <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
          <svg
            class="flex-shrink-0 mr-1 h-5 w-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd"
            />
          </svg>
          Closing on January 9, 2020
        </div>
      </div>
    </div>
    <div class="mt-6 lg:mt-0">
      <span class="shadow-sm rounded-md">
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
        >
          <font-awesome-icon
            :icon="['fab', 'twitter']"
            class="-ml-1 mr-2 h-5 w-5"
          />
          Follow
        </button>
      </span>
    </div>
  </div>
</template>

<style>
</style>