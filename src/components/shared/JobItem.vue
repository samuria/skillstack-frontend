<script>
import jobDetail from "@/mixins/jobDetail";
export default {
  name: "JobItem",
  mixins: [jobDetail]
};
</script>

<!-- Change this JobItem component, it looks so trash -->

<template>
  <!--<router-link to="#">
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
      <div
        class="w-full flex justify-between w-full mt-3 items-center text-green-700"
      >
        <div class="w-full flex-wrap text-xs -mx-1">
          <router-link
            to="/tag"
            class="border border-gray-400 rounded px-1 ml-1 text-center hover:text-green-900"
          >
            axure
          </router-link>
          <router-link
            to="#"
            class="border border-gray-400 rounded px-1 ml-1 hover:text-green-900"
          >
            figma
          </router-link>
          <router-link
            to="#"
            class="border border-gray-400 rounded px-1 ml-1 hover:text-green-900"
          >
            sketch
          </router-link>
          <router-link
            to="#"
            class="border border-gray-400 rounded px-1 ml-1 hover:text-green-900"
          >
            tailwindcss
          </router-link>
          <router-link
            to="#"
            class="border border-gray-400 rounded px-1 ml-1 text-green-600 hover:text-green-900"
          >
            frontend
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
  </router-link>-->

  <a-card hoverable :style="{ marginTop: '10px' }">
    <a-row type="flex" justify="space-between">
      <a-col span="24" :md="{ span: '3' }" class="test">
        <img class="company-image" :src="company.logo" :alt="company.alt" />
      </a-col>
      <a-col span="24" :md="{ span: '10' }">
        <h3>{{ post.position }}</h3>
        <span class="job-item-details"
          ><a-icon type="bank" /> {{ company.name }}
        </span>
        <span class="job-item-details"
          ><a-icon type="environment" /> {{ post.location }}</span
        >
        <div>
          <a-tag v-for="tag in post.tags" :key="tag.name">{{ tag.name }}</a-tag>
        </div>
      </a-col>
      <a-col span="24" :md="{ span: '10' }" class="job-item-last-column">
        <a-button type="dashed">{{ post.type }}</a-button>
        <span class="text-time-ago">{{ timeago }}</span>
      </a-col>
    </a-row>
  </a-card>
</template>

<style scoped>
@media only screen and (max-width: 768px) {
  .company-image {
    width: 30%;
  }
}

@media only screen and (min-width: 768px) {
  .company-image {
    width: 100%;
  }
}

.test {
  display: flex;
  flex-direction: flow;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
}

.job-item-last-column {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.job-item-details {
  @apply text-gray-600;
}

.text-time-ago {
  @apply text-gray-600;
}
</style>
