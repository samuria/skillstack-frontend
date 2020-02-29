<script>
import jobDetail from '@/mixins/jobDetail';
export default {
  name: 'JobItem',
  mixins: [jobDetail]
};
</script>

<template>
  <div class="list-item-container">
    <a-avatar shape="square" :size="48" :src="post.company.logo" />
    <div class="list-item-details">
      <router-link :to="post.slug">
        {{ post.position }}
      </router-link>
      <div>
        <span>{{ post.company.name }}</span> •
        <span style="color: #6a737c">{{ post.location }}</span>
      </div>
      <div>
        <router-link
          v-for="tag in post.tags"
          :key="tag.name"
          :to="'/tag/' + tag.slug"
          ><a-tag color="blue">{{ tag.name }}</a-tag></router-link
        >
      </div>
      <div style="margin-top: .5rem; font-size:12px">
        <span class="timeago" style="font-weight: 700">{{ timeago }}</span> •
        <span style="color: #6a737c">{{ post.type }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-item-container {
  display: flex;
  flex-direction: row;
}

.list-item-details {
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
}

.list-item-details a {
  font-size: 17px;
  color: #0077cc;
}

.timeago {
  @apply text-pink-700;
}
</style>
