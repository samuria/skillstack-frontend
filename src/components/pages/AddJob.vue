<script>
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import LocationSelect from '../shared/LocationSelect';
import { JOB_TYPES_FOR_DROPDOWN } from '@/store/constants';

export default {
  name: 'AddJob',
  components: {
    ckeditor: CKEditor.component,
    LocationSelect
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // The configuration of the editor.
      },
      formData: {
        location: ''
      },
      type: JOB_TYPES_FOR_DROPDOWN[0],
      typeOptions: JOB_TYPES_FOR_DROPDOWN
    };
  }
};
</script>

<template>
  <div>
    <div class="bg-gray-200 min-w-full">
      <div
        class="container mx-auto px-4 py-16 md:px-24 lg:px-32 xl:px-32 2xl:px-64 w-full text-2xl lg:text-3xl text-gray-800"
      >
        <font-awesome-icon icon="plus-circle" /><span class=" ml-2"
          >Post a new job</span
        >
      </div>
    </div>
    <div
      class="container mx-auto px-4 py-10 md:px-24 lg:px-32 xl:px-32 2xl:px-64"
    >
      <div class="bg-blue-100 text-sm text-blue-600 px-6 py-6 rounded">
        <span class="font-bold">Important reminder!</span> In order to post a
        job listing, you must provide email address resembling the company name
        you have specified. Once you have submitted the listing, a confirmation
        email will be sent to the address you provided. Your listing will be
        published after clicking the verification link in the email you
        received.
      </div>

      <div class="mt-6 w-full">
        <h5 class="pb-3">Email address</h5>
        <input
          type="text"
          class="bg-gray-100 text-gray-700 border border-gray-400 py-3 px-5 rounded w-full outline-none"
          placeholder="example@domain.com"
        />
      </div>

      <div class="my-6 w-full">
        <h5 class="pb-3">Position</h5>
        <input
          type="text"
          class="bg-gray-100 text-gray-700 border border-gray-400 py-3 px-5 rounded w-full outline-none"
          placeholder="e.g. Front End Developer"
        />
      </div>

      <div class="my-6 w-full">
        <h5 class="pb-3">Job description</h5>
        <ckeditor
          :editor="editor"
          v-model="editorData"
          :config="editorConfig"
        ></ckeditor>
      </div>

      <div class="my-6 w-full">
        <h5 class="pb-3">Location</h5>
        <location-select
          v-model="formData.location"
          :value="formData.location"
          :show-all="true"
          :searchable="true"
        />
        <p class="text-sm mt-3 mb-10 text-gray-600">
          If the role allows the possibility of being remote, please choose
          Remote.
        </p>
      </div>

      <div class="my-6 w-full">
        <h5 class="pb-3">Job type</h5>
        <multiselect
          v-model="type"
          :options="typeOptions"
          label="text"
          :searchable="false"
          :close-on-select="true"
        />
      </div>

      <div class="my-6 w-full">
        <h5 class="pb-3">Tags</h5>
        <input
          type="text"
          class="bg-gray-100 text-gray-700 border border-gray-400 py-3 px-5 rounded w-full outline-none"
        />
        <p class="text-sm mt-3 mb-10 text-gray-600">
          You can select the relevant skills or technologies required for this
          position from the list, or add your own by separating them with
          commas. You may add up to 8 tags per listing.<br /><br />
          Some examples of tags include
          <span
            class="border border-red-200 rounded bg-red-100 text-red-600 px-1"
            >frontend</span
          >,
          <span
            class="border border-red-200 rounded bg-red-100 text-red-600 px-1"
            >backend</span
          >,
          <span
            class="border border-red-200 rounded bg-red-100 text-red-600 px-1"
            >mobile</span
          >,
          <span
            class="border border-red-200 rounded bg-red-100 text-red-600 px-1"
            >react</span
          >,
          <span
            class="border border-red-200 rounded bg-red-100 text-red-600 px-1"
            >.net</span
          >. Choosing the right and effective tags will increase the chances of
          your listing to appear among the 'Similar Listings' section on the
          listing details page.
        </p>
      </div>

      <div class="my-10 w-full">
        <h3 class="text-2xl">Company Information</h3>
        <hr class="mt-5" />
      </div>
      <div class="my-6 w-full">
        <h5 class="pb-3">Company name</h5>
        <input
          type="text"
          class="bg-gray-100 text-gray-700 border border-gray-400 py-3 px-5 rounded w-full outline-none"
        />
      </div>
      <div class="my-6 w-full">
        <h5 class="pb-3">Website</h5>
        <input
          type="text"
          class="bg-gray-100 text-gray-700 border border-gray-400 py-3 px-5 rounded w-full outline-none"
          placeholder="https://"
        />
      </div>
      <div class="my-6 w-full">
        <h5 class="pb-3">Logo URL</h5>
        <input
          type="text"
          class="bg-gray-100 text-gray-700 border border-gray-400 py-3 px-5 rounded w-full outline-none"
          placeholder="https://"
        />
        <p class="text-sm mt-3 mb-10 text-gray-600">
          The logo will be displayed as a square on the job description page.
        </p>
      </div>
      <div class="my-6 w-full">
        <h5 class="pb-3">
          Twitter <span class="text-gray-500">(optional)</span>
        </h5>
        <input
          type="text"
          class="bg-gray-100 text-gray-700 border border-gray-400 py-3 px-5 rounded w-full outline-none"
          placeholder="@twitter"
        />
      </div>
      <div class="my-6 w-full">
        <h5 class="pb-3">
          LinkedIn profile <span class="text-gray-500">(optional)</span>
        </h5>
        <input
          type="text"
          class="bg-gray-100 text-gray-700 border border-gray-400 py-3 px-5 rounded w-full outline-none"
          placeholder="https://"
        />
      </div>
      <div class="flex justify-end my-6 w-full">
        <button
          class="items-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Preview <font-awesome-icon icon="arrow-circle-right" class="ml-1" />
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.ck-editor__editable_inline {
  min-height: 250px;
}
</style>
