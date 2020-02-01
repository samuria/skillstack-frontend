<script>
import allLocations from '../../assets/data/locations';

export default {
  props: {
    showAll: {
      type: Boolean,
      required: false,
      default: false
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false
    },
    value: {
      type: String,
      required: false,
      default: null
    }
  },

  data() {
    return {
      selected: null,
      options: []
    };
  },

  computed: {
    locations() {
      return allLocations;
    }
  },

  methods: {
    handleChange(value) {
      this.$emit('input', value);
    },

    syncValue() {
      if (this.value) {
        this.selected = this.value;
      }
    },

    searchChange(text) {
      if (text.trim() === '') {
        this.options = this.locations;

        return;
      }

      this.options = this.locations.filter(
        l =>
          l.toLocaleLowerCase('tr').indexOf(text.toLocaleLowerCase('tr')) > -1
      );
    }
  },

  watch: {
    value() {
      if (this.selected !== this.value) this.syncValue();
    }
  },

  created() {
    this.syncValue();
    this.options = this.locations;
  }
};
</script>

<template>
  <multiselect
    class="multiselect"
    :class="{ 'is-searchable': searchable }"
    v-model="selected"
    :options="options"
    :searchable="searchable"
    :close-on-select="true"
    :show-labels="false"
    :internal-search="false"
    placeholder="Select a city..."
    @input="handleChange"
    @search-range="searchChange"
  >
    <div slot="noResult">
      No results found
    </div>
  </multiselect>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
.multiselect__tags,
.multiselect__tags span,
.multiselect__tags input {
  @apply bg-gray-100 text-gray-700 border-gray-400 pt-2 pb-1 px-3;
}
</style>
