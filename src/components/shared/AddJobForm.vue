<script>
import { mapActions } from "vuex";
import { VueEditor } from "vue2-editor";
// import LocationSelect from "./LocationSelect";
// import { JOB_TYPES_FOR_DROPDOWN } from "../../store/constants";
// import { editorToolbar } from "../config";
import allLocations from "../../assets/data/locations";
import { editorToolbar } from "../config";

export default {
  components: {
    VueEditor
    // LocationSelect
  },

  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
      isPreview: false,
      isSaving: false,
      availableTags: undefined,
      form: {
        position: "",
        description: "",
        apply_email: "",
        apply_url: "",
        location: undefined,
        type: undefined,
        tags: "",
        company: {
          name: "",
          email: "",
          logo: "",
          website: "",
          twitter: "",
          linkedin: ""
        }
      }
      // type: JOB_TYPES_FOR_DROPDOWN[0],
      // typeOptions: JOB_TYPES_FOR_DROPDOWN
    };
  },

  computed: {
    editorToolbar() {
      return editorToolbar;
    },

    locations() {
      return allLocations;
    }
  },

  methods: {
    ...mapActions(["fetchAllTags"]),

    fetchTags() {
      this.fetchAllTags().then(res => {
        this.availableTags = res;
      });
    }
  },

  created() {
    this.fetchTags();
  }
};
</script>

<template>
  <!-- <div class="">
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
  </div> -->
  <div>
    <a-alert
      class="alertBox"
      message="Important Note"
      description="In order to post a job, you need to provide an email address compatible with the company name you specified. A confirmation email will be sent to the email address for verification after positing the ad. Your ad will be published after clicking the verification link in the email you will receive."
      type="info"
      show-icon
    />

    <a-card :style="{ marginBottom: '50px' }"
      ><a-form-model
        :model="form"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item label="Email Address">
          <a-input v-model="form.apply_email" size="large" />
        </a-form-model-item>

        <a-form-model-item label="Position">
          <a-input v-model="form.position" size="large" />
        </a-form-model-item>

        <a-form-model-item label="Description">
          <vue-editor
            class="vue-editor shadow-sm border-none"
            id="description"
            v-model="form.description"
            :editor-toolbar="editorToolbar"
          />
        </a-form-model-item>

        <a-form-model-item
          label="Location"
          help="If remote operation is available and is more convenient, please select Remote."
          :style="{ marginBottom: '20px' }"
        >
          <a-select
            show-search
            v-model="form.location"
            placeholder="Select a location"
            size="large"
          >
            <a-select-option v-for="location in locations" :key="location">{{
              location
            }}</a-select-option>
          </a-select>
        </a-form-model-item>

        <a-form-model-item label="Job type">
          <a-select
            v-model="form.type"
            placeholder="Select contract type"
            size="large"
          >
            <a-select-option value="fullTime">
              Full Time
            </a-select-option>
            <a-select-option value="partTime">
              Part Time
            </a-select-option>
            <a-select-option value="casual">
              Casual
            </a-select-option>
            <a-select-option value="internship">
              Contract
            </a-select-option>
          </a-select>
        </a-form-model-item>

        <a-form-model-item label="Tags">
          <a-select
            mode="tags"
            style="width: 100%"
            placeholder="e.g. vue, react, backend"
            size="large"
          >
            <a-select-option v-for="tag in availableTags" :key="tag.name">
              {{ tag.name }}
            </a-select-option>
          </a-select>
        </a-form-model-item>

        <a-divider orientation="left" :style="{ marginTop: '50px' }"
          >Company details</a-divider
        >

        <a-form-model-item label="Company name">
          <a-input v-model="form.company.name" size="large" />
        </a-form-model-item>
        <a-form-model-item label="Website">
          <a-input
            v-model="form.company.website"
            size="large"
            placeholder="https://"
          />
        </a-form-model-item>
        <a-form-model-item label="Logo URL">
          <a-input
            v-model="form.company.logo"
            size="large"
            placeholder="https://"
          />
        </a-form-model-item>
        <a-form-model-item label="Twitter (optional)">
          <a-input
            v-model="form.company.twitter"
            size="large"
            placeholder="@twitter"
          />
        </a-form-model-item>
        <a-form-model-item label="LinkedIn (optional)">
          <a-input
            v-model="form.company.twitter"
            size="large"
            placeholder="https://"
          />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary">Preview<a-icon type="right" /> </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-card>
  </div>
</template>

<style>
.vue-editor {
  border-color: red;
}

.alertBox {
  margin-bottom: 50px;
}
</style>
