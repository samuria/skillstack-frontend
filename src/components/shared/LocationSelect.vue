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
  <v-select
    class="vue-selector"
    :options="options"
    v-model="selected"
    @input="handleChange"
/></template>
