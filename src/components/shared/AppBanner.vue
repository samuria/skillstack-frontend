<script>
export default {
  name: 'AppBanner',
  props: {
    withBanner: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  // methods: {
  //   getTitles: async () => {
  //     try {
  //       await axios.get('http://localhost:3000/my-titles').then(res => {
  //         console.log(res.data);
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    handleBlur() {
      console.log('blur');
    },
    handleFocus() {
      console.log('focus');
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    }
  }
};
</script>

<template>
  <a-layout-content>
    <div
      :style="{
        background: '#fff',
        padding: '24px',
        minHeight: '150px',
        marginTop: '14px',
        border: '1px solid #BEBEBE'
      }"
      class="container"
    >
      <div class="search-box">
        <h2>Search</h2>
        <a-row :gutter="12">
          <a-col :md="{ span: '11' }"
            ><a-input
              size="large"
              placeholder="Position, technology"
              :style="{
                width: '100%'
              }"
          /></a-col>
          <a-col :md="{ span: '11' }" class="col"
            ><a-select
              class="location-select"
              showSearch
              placeholder="Location"
              optionFilterProp="children"
              :style="{ width: '100%' }"
              size="large"
              @focus="handleFocus"
              @blur="handleBlur"
              @change="handleChange"
              :filterOption="filterOption"
            >
              <a-select-option value="jack">Adelaide</a-select-option>
              <a-select-option value="lucy">Melbourne</a-select-option>
              <a-select-option value="tom">Sydney</a-select-option>
            </a-select></a-col
          >
          <a-col :md="{ span: '2' }" class="col"
            ><a-button
              type="primary"
              size="large"
              icon="search"
              :style="{ width: '100%' }"
              class="btn-search"
            ></a-button
          ></a-col>
        </a-row>
      </div>
      <div style="margin-top: 10px">
        <a-tag>Frontend</a-tag>
        <a-tag>Backend</a-tag>
        <a-tag>Mobile</a-tag>
        <a-tag>DevOps</a-tag>
      </div>
      <div style="margin-top: 2px">
        <a-tag>Adelaide</a-tag>
        <a-tag>Melbourne</a-tag>
        <a-tag>Sydney</a-tag>
        <a-tag>Brisbane</a-tag>
      </div>
    </div>
  </a-layout-content>
</template>

<style scoped>
@media only screen and (max-width: 767px) {
  .location-select,
  .btn-search {
    margin-top: 10px;
  }
}
</style>
