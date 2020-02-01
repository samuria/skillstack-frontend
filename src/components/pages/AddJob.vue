<script>
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
  name: 'AddJob',
  components: {
    ckeditor: CKEditor.component
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // The configuration of the editor.
      }
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
        <div class="w-full">
          <h5 class="pb-3">Email address</h5>
          <input
            type="text"
            class="bg-gray-100 text-gray-700 border border-gray-400 py-3 px-5 rounded w-full outline-none"
            placeholder="example@domain.com"
          />
        </div>
      </div>
      <div class="my-6 w-full">
        <div class="w-full">
          <h5 class="pb-3">Position</h5>
          <input
            type="text"
            class="bg-gray-100 text-gray-700 border border-gray-400 py-3 px-5 rounded w-full outline-none"
            placeholder="e.g. Front End Developer"
          />
        </div>
      </div>
      <div class="my-6 w-full">
        <div class="w-full">
          <h5 class="pb-3">Job description</h5>
          <ckeditor
            :editor="editor"
            v-model="editorData"
            :config="editorConfig"
          ></ckeditor>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.ck-editor__editable_inline {
  min-height: 250px;
}
</style>
