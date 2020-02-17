<script>
import jobDetail from '@/mixins/jobDetail';
import JobTypeBadge from './JobTypeBadge';
export default {
  name: 'JobItem',
  mixins: [jobDetail],
  components: {
    JobTypeBadge
  }
};
</script>

<!-- Change this JobItem component, it looks so trash -->

<template>
  <a-card hoverable :style="{ marginTop: '10px' }">
    <a-row type="flex" justify="space-between">
      <!-- TODO: change the class name from test to something else -->
      <a-col span="24" :md="{ span: '3' }" class="test">
        <img class="company-image" :src="company.logo" :alt="company.alt" />
      </a-col>
      <a-col span="15" :md="{ span: '10' }">
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
      <a-col :md="{ span: '5' }" class="job-item-last-column">
        <job-type-badge :post="post" />
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
