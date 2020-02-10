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
  <!-- <section
    class="banner relative min-w-full bg-cover z-50 bg-no-repeat"
    v-if="withBanner"
  >
    <div
      class="container mx-auto px-4 py-16 md:px-24 lg:px-32 xl:px-32 2xl:px-64 xl:py-20 w-full"
    >
      <span class="text-gray-100 font-medium text-2xl lg:text-3xl">Search</span>
      <div class="flex flex-wrap justify-between w-full mb-6 mt-3 items-center">
        <div class="w-full md:w-2/5 flex-auto">
          <input
            class="appearance-none block w-full bg-white text-gray-700 font-bold rounded py-3 md:py-5 px-5 mb-3 md:mb-0 leading-tight focus:outline-none"
            id="grid-first-name"
            type="text"
            placeholder="Keywords"
          />
        </div>
        <div class="w-full flex-auto md:w-2/5 md:pl-2">
          <input
            class="appearance-none block w-full b-white text-gray-700 font-bold rounded py-3 md:py-5 px-5 mb-3 md:mb-0 leading-tight focus:outline-none"
            id="grid-last-name"
            type="select"
            placeholder="Location"
          />
        </div>
        <div class="w-full flex justify-end md:w-2/12 xl:w-1/12 md:pl-2">
          <button
            v-on:click="getTitles"
            class="w-full text-white bg-green-600 py-3 md:py-5 rounded leading-tight focus:outline-none"
          >
            <font-awesome-icon icon="search" />
          </button>
        </div>
      </div>
      <div class="flex flex-wrap text-white text-xs sm:text-sm sm:pb-1">
        <div class="pb-1 sm:pb-0">
          <button
            class="border border-gray-700 bg-gray-800 rounded py-1 px-2 hover:bg-gray-700"
          >
            Frontend
          </button>
        </div>
        <div class="px-1 pb-1 sm:pb-0">
          <button
            class="border border-gray-700 bg-gray-800 rounded py-1 px-2 hover:bg-gray-700"
          >
            Backend
          </button>
        </div>
        <div class="pr-1">
          <button
            class="border border-gray-700 bg-gray-800 rounded py-1 px-2 hover:bg-gray-700"
          >
            Mobile
          </button>
        </div>
        <div class="">
          <button
            class="border border-gray-700 bg-gray-800 rounded py-1 px-2 hover:bg-gray-700"
          >
            DevOps
          </button>
        </div>
      </div>
      <div class="flex flex-wrap text-white text-xs sm:text-sm">
        <div class="pb-1 sm:pb-0">
          <button
            class="border border-gray-700 bg-gray-800 rounded py-1 px-2 hover:bg-gray-700"
          >
            Adelaide
          </button>
        </div>
        <div class="px-1 pb-1 sm:pb-0">
          <button
            class="border border-gray-700 bg-gray-800 rounded py-1 px-2 hover:bg-gray-700"
          >
            Melbourne
          </button>
        </div>
        <div class="pr-1">
          <button
            class="border border-gray-700 bg-gray-800 rounded py-1 px-2 hover:bg-gray-700"
          >
            Sydney
          </button>
        </div>
        <div class="">
          <button
            class="border border-gray-700 bg-gray-800 rounded py-1 px-2 hover:bg-gray-700"
          >
            Perth
          </button>
        </div>
      </div>
    </div>
  </section> -->

  <a-layout-content style="padding: 50px" class="banner">
    <div :style="{ background: '#fff', padding: '24px', minHeight: '224px' }">
      <div class="search-box">
        <h2>Search</h2>
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
@media only screen and (min-width: 768px) {
  .col {
    padding-left: 14px;
  }
}
</style>

<style scoped>
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
