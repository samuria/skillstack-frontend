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
          <router-link
            v-for="tag in post.tags"
            :key="tag.name"
            tag="a-tag"
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
  </a-card>
</template>

<style scoped>
@media only screen and (max-width: 768px) {
  .company-image {
    width: 20%;
  }

  .image-column {
    padding-bottom: 15px;
  }
}

@media only screen and (min-width: 768px) {
  .company-image {
    width: 60%;
  }
}

@media only screen and (min-width: 1200px) {
  .company-image {
    width: 45%;
  }
}

.company-image {
  opacity: 0;
}

img[lazy='loaded'] {
  opacity: 1;
  -webkit-transition: opacity 0.5s ease-in;
  -moz-transition: opacity 0.5s ease-in;
  -ms-transition: opacity 0.5s ease-in;
  -o-transition: opacity 0.5s ease-in;
  transition: opacity 0.5s ease-in;
}

.image-column {
  display: flex;
  flex-direction: flow;
  align-items: center;
  justify-content: center;
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
