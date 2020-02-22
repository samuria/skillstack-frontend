<script>
import { mapActions } from 'vuex';
import jobInfoMixin from '@/mixins/jobInfoMixin';

export default {
  props: {
    preview: {
      type: Boolean,
      required: false,
      default: false
    },
    previewData: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  mixins: [jobInfoMixin],
  data() {
    return {
      post: null,
      isLoading: true,
      notFound: false,
      relatedPosts: []
    };
  },
  computed: {
    postData() {
      return Object.keys(this.previewData).length
        ? this.previewData
        : this.post;
    }
  },

  methods: {
    ...mapActions(['fetchBySlug']),

    fetchData() {
      if (!this.preview) {
        this.fetchBySlug(this.$route.params.slug)
          .then(res => {
            this.isLoading = false;
            this.post = res;
            console.log(this.post.company.twitter);
          })
          .catch(() => {
            this.isLoading = false;
            this.notFound = true;
          });
      }
    }
  },
  watch: {
    $route(from, to) {
      if (to.name === 'jobDetails' && from.params.slug !== to.params.slug) {
        this.fetchData();
      }
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<template>
  <!-- TODO: Change this into an actual spinner -->
  <loading-spinner v-if="isLoading" />
  <section v-else>
    <div class="border-b lg:px-4 md:px-20">
      <div class="container">
        <div class="flex flex-wrap py-16">
          <div class="w-full md:w-2/3">
            <h2 class="text-xl md:text-2xl font-medium text-gray-700">
              {{ post.position }}
            </h2>
            <h3>
              <span class="text-gray-700">
                {{ post.type }}
              </span>
            </h3>
          </div>
          <div class="w-auto md:w-1/3 sm:mt-6">
            <a
              :href="'//' + post.company.twitter"
              target="_blank"
              class="md:float-right py-2 px-4 justify-center items-center text-gray-700 border-2 border-blue-400 hover:bg-blue-400 hover:text-gray-100 font-medium rounded focus:outline-none"
            >
              <font-awesome-icon :icon="['fab', 'twitter']" /><span class="pl-2"
                >Follow</span
              >
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:px-4 md:px-20 py-12">
      <div class="container">
        <article>
          <div class="flex flex-wrap">
            <div class="flex flex-col w-full md:w-4/6">
              <div class="flex justify-center">
                <img
                  class="company-image"
                  v-lazy="post.company.logo"
                  :alt="post.company.alt"
                  width="100"
                />
              </div>
              <div>
                <h3 class="mt-8 text-xl text-gray-800">
                  {{ post.company.name }}
                </h3>
                <div class="font-light flex flex-wrap text-sm text-gray-700">
                  <a
                    :href="'//' + post.company.website"
                    target="_blank"
                    class="hover:text-blue-600 flex flex-wrap items-center"
                    ><font-awesome-icon icon="link" />
                    <span class="ml-1">Website</span></a
                  >
                  <a
                    :href="post.company.twitter"
                    class="hover:text-blue-600 ml-4 flex flex-wrap items-center"
                    ><font-awesome-icon :icon="['fab', 'twitter']" />
                    <span class="ml-1">@{{ post.company.twitter }}</span></a
                  >
                  <a
                    :href="post.company.linkedin"
                    class="hover:text-blue-600 ml-4 flex flex-wrap items-center"
                    ><font-awesome-icon :icon="['fab', 'linkedin']" />
                    <span class="ml-1">{{ post.company.name }}</span></a
                  >
                </div>
              </div>

              <hr class="my-8" />
              <!-- <p class="text-gray-700 font-light">
                {{ post.description }}
              </p> -->
              <div
                class="text-sm text-gray-700"
                itemprop="description"
                v-html="post.description"
              />
            </div>
            <div class="w-full md:w-2/6 sm:pt-12">
              <div
                class="flex flex-col border bg-gray-100 rounded md:ml-4 px-8 py-6 text-sm"
              >
                <div class="flex flex-row">
                  <div class="w-1/12">
                    <font-awesome-icon
                      icon="calendar-alt"
                      size="lg"
                      class="text-indigo-500"
                    />
                  </div>
                  <div class="ml-5">
                    <span class="font-medium text-sm ">
                      Last updated
                    </span>
                    <p class="text-sm font-light">{{ formattedDate }}</p>
                  </div>
                </div>
                <div class="flex flex-row mt-4">
                  <div class="w-1/12">
                    <font-awesome-icon
                      icon="user"
                      size="lg"
                      class="text-indigo-500"
                    />
                  </div>
                  <div class="ml-5">
                    <span class="font-medium text-sm ">
                      Position
                    </span>
                    <p class="text-sm font-light">{{ post.position }}</p>
                  </div>
                </div>
                <div class="flex flex-row mt-4">
                  <div class="w-1/12">
                    <font-awesome-icon
                      icon="map-marked-alt"
                      size="lg"
                      class="text-indigo-500"
                    />
                  </div>
                  <div class="ml-5">
                    <span class="font-medium text-sm ">
                      Location
                    </span>
                    <p class="text-sm font-light">{{ post.location }}</p>
                  </div>
                </div>
                <div class="flex flex-row mt-4">
                  <div class="">
                    <font-awesome-icon
                      icon="globe"
                      size="lg"
                      class="text-indigo-500"
                    />
                  </div>
                  <div class="ml-5">
                    <span class="font-medium text-sm ">
                      Website
                    </span>
                    <p
                      class="text-sm font-light text-blue-600 hover:text-blue-400"
                    >
                      <a :href="post.company.website">{{
                        post.company.website
                      }}</a>
                    </p>
                  </div>
                </div>
                <div class="flex flex-row mt-4">
                  <div class="w-1/12">
                    <font-awesome-icon
                      icon="tags"
                      size="lg"
                      class="text-indigo-500"
                    />
                  </div>
                  <div class="ml-5">
                    <span class="font-medium text-sm "> Tags </span><br />
                    <div class="flex flex-wrap -ml-1 mt-2">
                      <router-link
                        v-for="tag in post.tags"
                        :key="tag.name"
                        :to="'/tag/' + tag.slug"
                        class="text-xs font-semibold bg-indigo-100 text-indigo-500 rounded-sm ml-1 p-1 hover:text-indigo-600"
                        >{{ tag.name }}</router-link
                      >
                    </div>
                  </div>
                </div>
                <div class="w-full border mt-4">
                  <button
                    class="w-full py-3 flex flex-row justify-center items-center item bg-indigo-600 text-white font-medium px-4 rounded focus:outline-none"
                  >
                    <font-awesome-icon icon="envelope" /><span class=" pl-2"
                      >Apply via email</span
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.company-image {
}
</style>

<style>
ul {
  list-style: disc;
  padding-left: 40px;
}
</style>
