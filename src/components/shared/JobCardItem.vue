<script>
import jobDetail from '@/mixins/jobDetail';
export default {
  name: 'JobItem',
  mixins: [jobDetail]
};
</script>

<template>
  <!-- <router-link :to="'/post/' + post.slug"
    ><div
      class="job-item flex flex-wrap py-4 px-6 border border-l-4 border-b-0 bg-white"
      :class="{
        'border-b rounded-bl rounded-br': this.lastPost,
        'rounded-tl rounded-tr': this.index === 0
      }"
    >
      <div class="mr-3 pt-1 sm:w-full md:pt-2">
        <img
          class="company-image"
          v-lazy="company.logo"
          :alt="company.alt"
          width="48"
        />
      </div>
      <div>
        <h2 class="text-blue-700 font-medium">
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
            class="text-xs font-medium bg-indigo-100 text-indigo-500 rounded-sm ml-1 p-1 hover:text-indigo-600"
            >{{ tag.name }}</router-link
          >
        </div>
        <div class="text-xs mt-2">
          <span class="text-gray-900 text-pink-700 font-semibold">{{
            timeago
          }}</span>
          ·
          <span class="text-gray-600">{{ post.type }}</span>
        </div>
      </div>
    </div></router-link
  > -->
  <a-card hoverable class="job-item">
    <div class="job-item-header">
      <img
        class="company-image"
        v-lazy="company.logo"
        :alt="company.alt"
        width="48"
        height="48"
      />

      <div class="job-item-content">
        <h4>
          {{ post.position }}
        </h4>
        <div>
          <span>{{ post.company.name }}</span> •
          <span style="color: #6a737c">{{ post.location }}</span>
        </div>
        <div>
          <router-link
            v-for="tag in post.tags"
            :key="tag.name"
            :to="'/tag/' + tag.slug"
            ><a-tag color="blue">{{ tag.name }}</a-tag>
          </router-link>
        </div>
        <div style="margin-top: 1rem;">
          <span>{{ timeago }}</span> •
          <span style="color: #6a737c">{{ post.type }}</span>
        </div>
      </div>
    </div>
  </a-card>
</template>

<style scoped>
.job-item-header {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.job-item-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
