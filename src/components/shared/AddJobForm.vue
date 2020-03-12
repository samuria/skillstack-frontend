<script>
import { VueEditor } from "vue2-editor";
// import LocationSelect from "./LocationSelect";
import { JOB_TYPES_FOR_DROPDOWN } from "../../store/constants";
import { editorToolbar } from "../config";

export default {
  components: {
    VueEditor
    // LocationSelect
  },

  data() {
    return {
      isPreview: false,
      isSaving: false,
      formData: {
        position: "",
        description: "",
        apply_email: "",
        apply_url: "",
        location: "",
        type: null,
        tags: "",
        company: {
          name: "",
          email: "",
          logo: "",
          website: "",
          twitter: "",
          linkedin: ""
        }
      },
      type: JOB_TYPES_FOR_DROPDOWN[0],
      typeOptions: JOB_TYPES_FOR_DROPDOWN
    };
  },

  computed: {
    defaultEditorToolbar() {
      return editorToolbar;
    }
  }
};
</script>

<template>
  <div class="">
    <div class="flex flex-col">
      <h3 class="text-lg font-semibold text-gray-800">Position Details</h3>
      <p class="text-sm text-gray-600">
        This information will be displayed publicly, so be careful what you
        share.
      </p>
    </div>
    <div class="border-b border-gray-300 mt-5 mb-6"></div>
    <div class="flex flex-wrap items-center">
      <div class="w-1/3">
        <label class="text-sm font-medium text-gray-700" for="position">
          Position name
        </label>
      </div>
      <input
        type="text"
        class="w-1/3 rounded border border-gray-400 px-3 py-2 outline-none shadow-sm text-sm text-gray-800 focus:border-gray-500"
        id="position"
      />
    </div>
    <div class="border-b border-gray-300 my-6"></div>
    <div class="flex flex-wrap items-center">
      <div class="w-1/3">
        <label class="text-sm font-medium text-gray-700" for="email">
          Email address
        </label>
      </div>
      <input
        type="text"
        class="w-1/2 rounded border border-gray-400 px-3 py-2 outline-none shadow-sm text-sm text-gray-800 focus:border-gray-500"
        id="email"
      />
    </div>
    <div class="border-b border-gray-300 my-6"></div>
    <div class="flex flex-wrap">
      <div class="w-1/3">
        <label class="text-sm font-medium text-gray-700" for="description">
          Description
        </label>
      </div>
      <div class="w-2/3">
        <vue-editor
          class="vue-editor shadow-sm border-none"
          id="description"
          v-model="formData.description"
          :editor-toolbar="defaultEditorToolbar"
        />
      </div>
    </div>

    <div class="border-b border-gray-300 my-6"></div>
  </div>
</template>

<style>
.vue-editor {
  border-color: red;
}
</style>
