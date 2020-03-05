<script>
import jobDetail from '@/mixins/jobDetail';
import PostTags from './PostTags';

export default {
  name: 'JobItem',
  mixins: [jobDetail],
  components: {
    PostTags
  },
  created() {
    console.log(this.post.slug);
  }
};
</script>

<template>
  <router-link :to="'/post/' + post.slug"
    ><div
      class="job-item flex flex-wrap py-4 px-6 border border-l-4 border-b-0 hover:bg-gray-100"
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
          <post-tags :tags="post.tags" />
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
  >
</template>

<style scoped>
.job-item {
  border-left-color: #5a67d8;
}

.job-item:hover h2 {
  @apply text-blue-600;
}
</style>
