<script>
import jobDetail from '@/mixins/jobDetail';
// import JobTypeBadge from './JobTypeBadge';
export default {
  name: 'JobItem',
  mixins: [jobDetail],
  components: {
    // JobTypeBadge
  }
};
</script>

<template>
  <!-- <a-card hoverable :style="{ marginTop: '10px' }">
    <a-row type="flex" justify="space-between">
      <a-col span="24" :md="{ span: '3' }" class="image-column">
        <img class="company-image" v-lazy="company.logo" :alt="company.alt" />
      </a-col>
      <a-col span="12">
        <h3>{{ post.position }}</h3>
        <span class="job-item-details"
          ><a-icon type="bank" /> {{ company.name }}
        </span>
        <span class="job-item-details"
          ><a-icon type="environment" /> {{ post.location }}</span
        >
        <div :style="{ marginTop: '5px' }">
          <router-link
            v-for="tag in post.tags"
            :key="tag.name"
            :to="'/tag/' + tag.slug"
            >{{ tag.name }}</router-link
          >
        </div>
      </a-col>
      <a-col span="9" :md="{ span: '6' }" class="job-item-last-column">
        <job-type-badge :post="post" />
        <span class="text-time-ago">{{ timeago }}</span>
      </a-col>
    </a-row>
  </a-card> -->

  <router-link :to="post.slug"
    ><div class="job-item flex flex-wrap py-4 px-6 rounded-l">
      <div class="mr-3 pt-1">
        <img
          class="company-image"
          v-lazy="company.logo"
          :alt="company.alt"
          width="48"
        />
      </div>
      <div>
        <h2 class="text-gray-900 text-blue-700 font-semibold">
          {{ post.position }}
        </h2>
        <h3 class="text-xs">
          <span class="text-gray-900">{{ company.name }}</span> ·
          <span class="text-gray-600">{{ post.location }}</span>
        </h3>
        <div class="flex flex-wrap -ml-1">
          <router-link
            v-for="tag in post.tags"
            :key="tag.name"
            :to="'/tag/' + tag.slug"
            class="text-xs font-semibold bg-indigo-100 text-indigo-500 rounded-sm ml-1 p-1 hover:text-indigo-600"
            >{{ tag.name }}</router-link
          >
        </div>
        <div class="text-xs mt-2">
          <span class="text-gray-900 text-orange-600 font-semibold">{{
            timeago
          }}</span>
          ·
          <span class="text-gray-600">{{ post.type }}</span>
        </div>
      </div>
    </div></router-link
  >
</template>

<style scoped>
img[lazy='loaded'] {
  opacity: 1;
  -webkit-transition: opacity 0.5s ease-in;
  -moz-transition: opacity 0.5s ease-in;
  -ms-transition: opacity 0.5s ease-in;
  -o-transition: opacity 0.5s ease-in;
  transition: opacity 0.5s ease-in;
}

.job-item {
  background-color: #fafafa;
  border-bottom: 1px solid #e4e6e8;
  border-left: 4px solid transparent;
}

.job-item:hover {
  background-color: white;
  border-left-color: #ff8c42;
}

.job-item:hover h2 {
  @apply text-blue-600;
}
</style>
