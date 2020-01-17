<script>
import jobDetail from "@/mixins/jobDetail";
export default {
  name: "JobItem",
  mixins: [jobDetail]
};
</script>

<template>
  <router-link to="#">
    <div
      class="rounded px-4 mt-2 py-6 border border-gray-300 hover:border-gray-400 hover:bg-gray-100"
    >
      <div class="flex justify-between">
        <div class="sm:w-1/5 flex justify-center">
          <img
            class="self-center"
            :src="company.logo"
            :alt="company.alt"
            width="60"
          />
        </div>
        <div class="w-4/5 sm:w-3/5 flex flex-col ml-5 lg:ml-0 text-gray-700">
          <span class="text-sm md:text-lg font-semibold">{{
            post.position
          }}</span>
          <div>
            <font-awesome-icon icon="briefcase" class="text-gray-600" />
            <span class="text-xs md:text-sm ml-2">{{ post.company.name }}</span>
          </div>
        </div>
        <div class="flex justify-end w-1/4 sm:w-1/5 text-gray-700">
          <span class="text-xs md:text-base font-semibold">{{ jobType }}</span>
        </div>
      </div>
      <div class="w-full flex justify-between w-full mt-3 items-center">
        <div class="w-full flex-wrap text-xs -mt-1 -mx-1">
          <router-link
            to="/tag"
            class="border border-gray-400 rounded px-1 mt-1 mx-1 text-green-700 hover:text-green-900"
          >
            Axure
          </router-link>
          <router-link
            to="#"
            class="border border-gray-400 rounded px-1 mt-1 text-green-600 hover:text-green-900"
          >
            Figma
          </router-link>
          <router-link
            to="#"
            class="border border-gray-400 rounded px-1 mt-1 mx-1 text-green-600 hover:text-green-900"
          >
            Sketch
          </router-link>
          <router-link
            to="#"
            class="border border-gray-400 rounded px-1 mt-1 text-green-600 hover:text-green-900"
          >
            TailwindCSS
          </router-link>
          <router-link
            to="#"
            class="border border-gray-400 rounded px-1 mt-1 mx-1 text-green-600 hover:text-green-900"
          >
            Sketch
          </router-link>
        </div>
        <div
          class="sm:inline-flex w-full ml-2 items-center justify-end text-gray-600"
        >
          <div class="flex items-center">
            <font-awesome-icon icon="map-marker-alt" />
            <span class="text-sm ml-2">{{ post.location }}</span>
          </div>
          <div class="flex items-center sm:ml-3">
            <font-awesome-icon icon="clock" />
            <span class="text-sm ml-2">{{ timeago }}</span>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style></style>
