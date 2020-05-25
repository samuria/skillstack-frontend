<script>
import jobDetail from '@/mixins/jobDetail';

export default {
  name: 'JobItem',
  mixins: [jobDetail],
  components: {},
};
</script>

<template>
  <!-- <router-link :to="'/post/' + post.slug">
    <div class="px-6 py-4" :class="{ 'border-b': !lastPost }">
      <div class="flex justify-between text-sm">
        <div>
          <h3 class="font-medium text-indigo-700">
            {{ post.position }}
          </h3>
          <div class="pt-2 flex flex-wrap">
            <h4 class="text-gray-600 flex items-center">
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 4V3C4 1.34315 5.343 0 7 0H9C10.657 0 12 1.34315 12 3V4H14C15.105 4 16 4.89543 16 6V9.5708C13.51 10.4947 10.815 10.9999 8 10.9999C5.185 10.9999 2.49 10.4947 0 9.5707V6C0 4.89543 0.895 4 2 4H4ZM6 3C6 2.44772 6.448 2 7 2H9C9.552 2 10 2.44772 10 3V4H6V3ZM7 8C7 7.44772 7.448 7 8 7H8.00999C8.56199 7 9.00999 7.44772 9.00999 8C9.00999 8.5523 8.56199 9 8.00999 9H8C7.448 9 7 8.5523 7 8Z"
                  fill="#a0aec0"
                />
                <path
                  d="M0 11.6923V14C0 15.1046 0.895 16 2 16H14C15.105 16 16 15.1046 16 14V11.6923C13.487 12.5404 10.796 12.9999 8 12.9999C5.204 12.9999 2.513 12.5404 0 11.6923Z"
                  fill="#a0aec0"
                />
              </svg>
              <span class="ml-2">{{ post.company.name }}</span>
            </h4>
            <h4 class="sm:w-full md:ml-8 text-gray-600 flex items-center">
              <svg width="14" height="17" viewBox="0 0 14 17">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.05025 2.05028C4.78392 -0.683425 9.2161 -0.683425 11.9497 2.05028C14.6834 4.78387 14.6834 9.21607 11.9497 11.9497L7 16.8995L2.05025 11.9497C-0.683418 9.21607 -0.683418 4.78387 2.05025 2.05028ZM7 8.99997C8.1046 8.99997 9 8.10457 9 6.99997C9 5.89537 8.1046 4.99997 7 4.99997C5.89543 4.99997 5 5.89537 5 6.99997C5 8.10457 5.89543 8.99997 7 8.99997Z"
                  fill="#a0aec0"
                />
              </svg>
              <span class="ml-2">{{ post.location }}</span>
            </h4>
          </div>
        </div>
        <div class="flex flex-col items-end">
          <div
            class="self-end bg-green-200 text-green-900 font-medium text-xs px-2 rounded-full"
          >
            {{ post.type }}
          </div>
          <div class="pt-2">
            <h4 class="text-gray-600 flex items-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 6V10L13 13L10 6ZM19 10C19 14.971 14.971 19 10 19C5.029 19 1 14.971 1 10C1 5.029 5.029 1 10 1C14.971 1 19 5.029 19 10Z"
                  stroke="#a0aec0"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span class="ml-2">{{ timeago }}</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </router-link> -->
  <!-- <router-link :to="'/post/' + post.slug" class="job-card">
    <div>
      <h3 class="position-title">{{ post.position }}</h3>
      <p class="company-title">{{ post.company.name }}</p>
      <a-tag v-for="tag in post.tags" :key="tag.name">{{ tag.name }}</a-tag>
    </div>
    <div class="card-right-content">
      <div class="save-button">
        <label style="margin-right: 8px;">Save</label><a-icon type="star" />
      </div>
      <p class="timeago">
        {{ timeago }}
      </p>
    </div>
  </router-link> -->
  <a-list-item slot="renderItem" slot-scope="post" key="post.position">
    <!-- <div class="save-button" slot="extra">
      <label style="margin-right: 8px;">Save</label><a-icon type="star" />
    </div> -->
    <div class="card-right-content" slot="extra">
      <div class="save-button"><a-icon class="save-icon" type="star" /></div>
      <p class="timeago">
        {{ timeago }}
      </p>
    </div>
    <a-list-item-meta>
      <router-link slot="title" :to="post.slug">{{
        post.position
      }}</router-link>
      <a-avatar slot="avatar" shape="square" :size="64">
        {{ post.company.name }}
      </a-avatar>
      <div slot="description">
        <a-tag v-for="tag in post.tags" :key="tag.name">{{ tag.name }}</a-tag>
      </div>
    </a-list-item-meta>
  </a-list-item>
</template>

<style scoped>
.save-button {
  align-self: flex-end;
}

.save-icon {
  font-size: 20px;
}

.card-right-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  -webkit-user-select: none;
}

.timeago {
  color: #8c8c8c;
}
</style>
