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
  <section class="border-b py-12 lg:px-4 md:px-20 pt-10">
    <div class="container ">
      <h2 class="text-3xl font-medium">Search</h2>
      <div class="flex flex-wrap pt-4">
        <div class="w-full flex-auto md:w-2/5">
          <input
            type="text"
            class="w-full outline-none px-2 md:px-4 py-2 md:py-4 rounded text-gray-700 font-medium border-2 border-gray-400 hover:border-gray-500 focus:border-gray-700"
            placeholder="Position, technology"
            spellcheck="false"
          />
        </div>
        <div class="w-full md:w-2/5 sm:my-3 md:mx-3">
          <input
            type="text"
            class="w-full outline-none px-2 md:px-4 py-2 md:py-4 rounded text-gray-700 font-medium border-2 border-gray-400 hover:border-gray-500 focus:border-gray-700"
            placeholder="Location"
          />
        </div>
        <div class="w-full flex md:w-1/12 lg:w-1/12">
          <button
            class="w-full flex-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded py-2"
          >
            <font-awesome-icon icon="search" />
          </button>
        </div>
      </div>
      <div class="flex mt-4 text-sm text-gray-700">
        <a href="#" class="border-2 hover:border-gray-500 px-2 py-1 rounded"
          >Frontend</a
        >
        <a
          href="#"
          class="border-2 hover:border-gray-500 px-2 py-1 rounded ml-1"
          >Backend</a
        >
        <a
          href="#"
          class="border-2 hover:border-gray-500 px-2 py-1 rounded ml-1"
          >Mobile</a
        >
        <a
          href="#"
          class="border-2 hover:border-gray-500 px-2 py-1 rounded ml-1"
          >DevOps</a
        >
      </div>
      <div class="flex mt-1 text-sm text-gray-700">
        <a href="#" class="border-2 hover:border-gray-500 px-2 py-1 rounded"
          >Adelaide</a
        >
        <a
          href="#"
          class="border-2 hover:border-gray-500 px-2 py-1 rounded ml-1"
          >Melbourne</a
        >
        <a
          href="#"
          class="border-2 hover:border-gray-500 px-2 py-1 rounded ml-1"
          >Sydney</a
        >
        <a
          href="#"
          class="border-2 hover:border-gray-500 px-2 py-1 rounded ml-1"
          >Perth</a
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
@media only screen and (max-width: 767px) {
  .location-select,
  .btn-search {
    margin-top: 10px;
  }
}
</style>
