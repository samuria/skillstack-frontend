<script>
import { mapActions } from 'vuex';
import { VueEditor } from 'vue2-editor';
// import LocationSelect from "./LocationSelect";
// import { JOB_TYPES_FOR_DROPDOWN } from "../../store/constants";
// import { editorToolbar } from "../config";
import allLocations from '../../assets/data/locations';
import { editorToolbar } from '../config';

export default {
  components: {
    VueEditor,
    // LocationSelect
  },

  data() {
    return {
      isPreview: false,
      isSaving: false,
      availableTags: undefined,
      form: {
        apply_email: '',
        position: '',
        description: '',
        location: undefined,
        type: undefined,
        tags: '',
        apply_url: '',
        company: {
          name: '',
          email: '',
          logo: '',
          website: '',
          twitter: '',
          linkedin: '',
        },
      },
      rules: {
        apply_email: [
          { type: 'email', message: 'Enter a valid email address' },
          {
            required: true,
            message: 'Please provide an email address',
            trigger: 'blur',
          },
        ],
        position: [
          {
            required: true,
            message: 'Please provide a position title',
            trigger: 'blur',
          },
          {
            min: 5,
            max: 100,
            message: 'Position title must be 5 - 100 characters',
            trigger: 'blur',
          },
        ],
        description: [
          {
            required: true,
            message: 'Please provide a job description',
            trigger: 'blur',
          },
          {
            max: 6000,
            message: 'Job description cannot exceed 4000 characters',
            trigger: 'blur',
          },
        ],
        location: [
          {
            required: true,
            message: 'Select the job location',
            trigger: 'change',
          },
        ],
        type: [
          {
            required: true,
            message: 'Select the job type',
            trigger: 'change',
          },
        ],
      },
    };
  },

  computed: {
    editorToolbar() {
      return editorToolbar;
    },

    locations() {
      return allLocations;
    },
  },

  methods: {
    ...mapActions(['fetchAllTags']),

    fetchTags() {
      this.fetchAllTags().then((res) => {
        this.availableTags = res;
      });
    },

    validateForm() {
      this.$refs.jobForm.validate((valid) => {
        if (valid) {
          alert('Validation successfull');
        } else {
          console.loog('Validation errror!');
          return false;
        }
      });
    },
  },

  created() {
    this.fetchTags();
  },
};
</script>

<template>
  <div>
    <a-alert
      class="alertBox"
      message="Important Note"
      description="In order to post a job, you need to provide an email address compatible with the company name you specified. A confirmation email will be sent to the email address for verification after positing the ad. Your ad will be published after clicking the verification link in the email you will receive."
      type="info"
      show-icon
    />

    <a-form-model ref="jobForm" :rules="rules" :model="form">
      <a-form-model-item label="Email Address" prop="apply_email">
        <a-input v-model="form.apply_email" size="large" />
      </a-form-model-item>

      <a-form-model-item label="Position" ref="position" prop="position">
        <a-input v-model="form.position" size="large" />
      </a-form-model-item>

      <a-form-model-item label="Description" prop="description">
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
        prop="location"
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

      <a-form-model-item label="Job type" prop="type">
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
      <a-form-model-item label="Twitter">
        <a-input
          v-model="form.company.twitter"
          size="large"
          placeholder="@twitter"
        />
      </a-form-model-item>
      <a-form-model-item label="LinkedIn">
        <a-input
          v-model="form.company.linkedin"
          size="large"
          placeholder="https://"
        />
      </a-form-model-item>
      <a-form-model-item
        ><a-button type="primary" size="large" @click="validateForm"
          >Preview</a-button
        ></a-form-model-item
      >
    </a-form-model>
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

<style scoped>
.steps-content {
  margin-top: 16px;
}

.steps-action {
  margin-top: 24px;
}
</style>
