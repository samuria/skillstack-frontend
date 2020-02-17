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

<template>
  <a-card hoverable :style="{ marginTop: '10px' }">
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
          <a-tag v-for="tag in post.tags" :key="tag.name">{{ tag.name }}</a-tag>
        </div>
      </a-col>
      <a-col span="9" :md="{ span: '6' }" class="job-item-last-column">
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

.image-column {
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
  padding-left: 20px;
}

.job-item-details,
.text-time-ago {
  @apply text-gray-600;
}
</style>
