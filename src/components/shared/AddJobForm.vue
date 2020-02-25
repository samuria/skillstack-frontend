<script>
import { VueEditor } from 'vue2-editor';
import LocationSelect from './LocationSelect';
import { JOB_TYPES_FOR_DROPDOWN } from '../../store/constants';

export default {
  components: {
    VueEditor,
    LocationSelect
  },

  data() {
    return {
      isPreview: false,
      isSaving: false,
      formData: {
        position: '',
        description: '',
        apply_email: '',
        apply_url: '',
        location: '',
        type: null,
        tags: '',
        company: {
          name: '',
          email: '',
          logo: '',
          website: '',
          twitter: '',
          linkedin: ''
        }
      },
      type: JOB_TYPES_FOR_DROPDOWN[0],
      typeOptions: JOB_TYPES_FOR_DROPDOWN
    };
  }
};
</script>

<template>
  <div :style="{ minHeight: '2000px' }">
    <div
      class="bg-blue-100 rounded border border-blue-300 text-blue-700 px-6 py-4"
      role="alert"
    >
      <p class="font-bold">Important reminder!</p>
      <p class="text-sm">
        In order to add a job posting, you must provide an email address that
        resembles the company name you have specified. A confirmation email will
        be sent to the email address you have specified for verification after
        submitting the form. Your posting will be published after clicking the
        verification link in the email.
      </p>
    </div>

    <form class="w-full mt-12">
      <div class="flex flex-col">
        <div class="mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-email"
          >
            Email address
          </label>
          <input
            class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-email"
            type="text"
            placeholder="mail@company.com"
            v-model="formData.company_email"
          />
        </div>
        <div class="mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-position"
          >
            Position
          </label>
          <input
            class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-position"
            type="text"
            v-model="formData.position"
          />
        </div>
        <div class="mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-description"
          >
            Description
          </label>
          <vue-editor id="grid-description" v-model="formData.description" />
        </div>
        <div class="mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-location"
          >
            Location
          </label>
          <location-select
            v-model="formData.location"
            :value="formData.location"
          />
          <p class="text-sm mt-2 text-gray-600">
            Select remote if the position provides both on-site and remote
            operation.
          </p>
        </div>
        <div class="mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-tags"
          >
            Job type
          </label>
          <v-select
            class="vue-selector"
            label="text"
            :options="typeOptions"
            v-model="formData.type"
          />
        </div>
        <div class="mb-12">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-tags"
          >
            Tags
          </label>
          <!-- TODO: Implement tag suggestions -->
          <input
            class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-tags"
            type="text"
            data-multiple
            ref="tagsInput"
            v-model="formData.tags"
          />
          <p class="text-sm mt-2 text-gray-600">
            You can specify skills and technologies required for this position
            by select the relevant tags from the list or add your own with
            commas. <br /><br />
            Tags such as<code>frontend</code>,<code>backend</code>,
            <code>mobile</code>,<code>designer</code> can be added to your post
            and be associated to the relevant category.<br />
            Choosing the right and effective tags will increase the chances of
            your post appearing among the 'Similar posts' section in the job
            description pages.
          </p>
        </div>
        <div class="mb-12">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-application-url"
          >
            Application information
          </label>
          <input
            class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-application-url"
            type="text"
            placeholder="URL"
            v-model="formData.apply_url"
          />
          <input
            class="mt-2 appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Email address"
            v-model="formData.apply_email"
          />
        </div>

        <h2 class="text-xl md:text-2xl font-light text-gray-700">
          Company
        </h2>
        <hr class="mt-3 mb-6" />

        <div class="mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-company-name"
          >
            Company name
          </label>
          <input
            class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-company-name"
            type="text"
            v-model="formData.company.name"
          />
        </div>
        <div class="mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-company-website"
          >
            Website
          </label>
          <input
            class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-company-website"
            type="text"
            placeholder="https://"
            v-model="formData.company.website"
          />
        </div>
        <div class="mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-company-logo"
          >
            Logo URL
          </label>
          <input
            class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-company-logo"
            type="text"
            placeholder="https://"
            v-model="formData.company.logo"
          />
          <p class="text-sm mt-2 text-gray-600">
            The logo will be displayed as a square.
          </p>
        </div>
        <div class="mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-company-twitter"
          >
            Twitter handle <span class="text-gray-500">(optional)</span>
          </label>
          <input
            class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-company-twitter"
            type="text"
            placeholder="@twitter"
            v-model="formData.company.twitter"
          />
        </div>
        <div class="mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-company-linkedin"
          >
            LinkedIn URL <span class="text-gray-500">(optional)</span>
          </label>
          <input
            class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-company-linkedin"
            type="text"
            placeholder="https://"
            v-model="formData.company.linkedin"
          />
        </div>
      </div>
      <div class="mb-14 flex justify-end">
        <router-link
          to="/post/add"
          tag="button"
          class="flex flex-row justify-center items-center item bg-indigo-600 text-white font-bold px-4 py-3 rounded w-40 sm:w-12 focus:outline-none"
        >
          <span class="sm:hidden pr-2">Preview</span
          ><font-awesome-icon icon="arrow-right" />
        </router-link>
      </div>
    </form>
  </div>
</template>

<style scoped>
code {
  @apply text-xs font-medium bg-indigo-100 text-indigo-500 rounded-sm ml-1 p-1;
}

code:hover {
  @apply text-indigo-600;
}
</style>
