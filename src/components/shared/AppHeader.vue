<script>
export default {
  name: "AppHeader"
};
</script>

<template>
  <header class="flex items-center lg:px-4 md:px-20 border-b">
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

        <router-link
          to="/post/add"
          tag="button"
          class="flex flex-row justify-center items-center item bg-indigo-600 text-white font-medium px-4 rounded w-40 sm:w-12 focus:outline-none"
        >
          <font-awesome-icon icon="plus" /><span class="sm:hidden pl-2"
            >New post</span
          >
        </router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
