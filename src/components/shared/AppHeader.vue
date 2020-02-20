<script>
export default {
  name: 'AppHeader'
};
</script>

<template>
  <!--<a-layout-header class="header-layout">
    <div class="container">
      <div class="logo" :style="{ float: 'left' }">
        <router-link title="EMSoft" to="/">
          <span class="logo-section-one">EM</span>
          <span class="logo-section-two">Soft</span>
        </router-link>
      </div>
      <div :style="{ float: 'right' }">
        <a-button icon="bell" size="large">
          <span class="btn-subscribe-text">Subscribe</span></a-button
        >
        <a-button
          type="primary"
          size="large"
          icon="plus-circle"
          class="btn-post-ad"
          ><span class="btn-post-ad-text">New post</span></a-button
        >
      </div>
    </div>
  </a-layout-header> -->

  <!-- <header
    class="container bg-white flex items-center justify-between w-full border border-red-600"
  >
    <div>
      <a href="/" title="Abstract UI" class="h-6 xl:h-8">
        <span class="text-3xl text-gray-700 font-bold underline">EM</span>
        <span class="text-3xl text-green-600 font-extrabold underline"
          >Soft</span
        >
      </a>
    </div>
    <div class="hidden md:block">
      <nav>
        <a
          href="#"
          title="Products"
          class="px-4 py-2 inline-block font-bold rounded text-gray-600 hover:bg-gray-200 hover:text-gray-700"
          ><font-awesome-icon icon="bullhorn" /><span class="px-3"
            >Subscribe</span
          ></a
        >
        <a
          href="#"
          title="Products"
          class="px-4 py-2 inline-block font-bold rounded bg-green-600 text-white ml-2"
          ><span class="px-3">Post a discussion</span></a
        >
      </nav>
    </div>
    <div class="md:hidden">
      <nav>
        <a
          href="#"
          title="Products"
          class="px-4 py-2 inline-block rounded bg-gray-700 text-gray-100"
          ><font-awesome-icon icon="bullhorn" />
        </a>
        <a
          href="#"
          title="Products"
          class="px-4 py-2 inline-block rounded bg-green-600 text-gray-100 ml-2"
          ><font-awesome-icon icon="plus"
        /></a>
      </nav>
    </div>
  </header> -->

  <header class="flex items-center lg:px-4 md:px-20">
    <nav class="container flex justify-between">
      <a href="/" title="EMSoft" class="text-3xl text-gray-700 font-bold">
        <span class="underline">EM</span>
        <span class="text-indigo-600 underline">Soft</span>
      </a>
      <div class="w-full flex justify-end text-base">
        <button
          class="text-gray-700 hover:border-gray-500 border-2 w-40 sm:w-12 font-medium py-2 px-4 rounded mr-2 focus:outline-none"
        >
          <font-awesome-icon icon="bell" /><span class="sm:hidden pl-2"
            >Subscribe</span
          >
        </button>

        <button
          class="flex flex-row justify-center items-center item bg-indigo-600 text-white font-medium px-4 rounded w-40 sm:w-12 focus:outline-none"
        >
          <font-awesome-icon icon="plus" /><span class="sm:hidden pl-2"
            >New post</span
          >
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
