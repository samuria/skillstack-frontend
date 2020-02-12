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
  <a-layout-content class="banner">
    <div
      :style="{
        padding: '24px',
        minHeight: '224px',
        maxWidth: '1920px',
        margin: '0 auto'
      }"
    >
      <div class="search-box">
        <h2 style="color: white">Search</h2>
        <a-row>
          <a-col :md="{ span: '11' }"
            ><a-input
              size="large"
              placeholder="Position, technology"
              :style="{ width: '100%', marginTop: '10px' }"
          /></a-col>
          <a-col :md="{ span: '11' }" class="col"
            ><a-select
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              :style="{ width: '100%', marginTop: '10px' }"
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
              :style="{ width: '100%', marginTop: '10px' }"
            ></a-button
          ></a-col>
        </a-row>
      </div>
      <div style="margin-top: 10px">
        <a-tag color="blue">Frontend</a-tag>
        <a-tag color="blue">Backend</a-tag>
        <a-tag color="blue">Mobile</a-tag>
        <a-tag color="blue">DevOps</a-tag>
      </div>
      <div style="margin-top: 2px">
        <a-tag color="blue">Adelaide</a-tag>
        <a-tag color="blue">Melbourne</a-tag>
        <a-tag color="blue">Sydney</a-tag>
        <a-tag color="blue">Brisbane</a-tag>
      </div>
    </div>
  </a-layout-content>
</template>

<style scoped>
@media only screen and (max-width: 768px) {
  .banner {
    padding: 20px;
  }
}

@media only screen and (min-width: 768px) {
  .banner {
    padding: 50px;
  }

  .col {
    padding-left: 14px;
  }
}

.banner {
  background-image: url('../../assets/images/banner.jpg');
  max-height: 500px;
  background-position: 50%;
  position: relative;
  z-index: 50;
  background-size: cover;
  background-repeat: no-repeat;
}

.banner::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(42, 46, 50, 0.7);
  z-index: -1;
}
</style>
