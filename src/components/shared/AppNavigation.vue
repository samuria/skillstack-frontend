<script>
export default {
  name: "AppHeader",
  data() {
    return {
      open: false
    };
  },

  methods: {
    handleNavbarOpen() {
      console.log(this.open);
      this.open = !this.open;
      console.log(this.open);
    }
  }
};
</script>

<template>
  <!-- <header class="flex items-center lg:px-4 md:px-20 border-b">
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
  </header> -->
  <nav :x-data="open" class="bg-gray-800 border-b border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center w-full">
          <div class="flex flex-shrink-0 items-center">
            <img
              class="block h-8 w-auto"
              src="@/assets/images/logo.svg"
              alt=""
            />
            <span
              class="hidden lg:block h-8 w-auto text-gray-100 font-bold ml-2 select-none text-xl hidden lg:block"
              >skillstack</span
            >
          </div>
          <div class="hidden md:block w-full flex">
            <div class="ml-10 flex items-baseline justify-center">
              <a
                href="#"
                class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                >Home</a
              >
              <a
                href="#"
                class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >Companies</a
              >
              <a
                href="#"
                class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >Tags</a
              >
              <a
                href="#"
                class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >Favourites</a
              >
            </div>
          </div>
        </div>
        <div class="flex-shrink-0 hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <button
              class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
            >
              <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <button
              class="ml-4 flex items-center text-sm font-medium text-indigo-100 px-4 py-2 rounded-md bg-indigo-600 focus:outline-none"
            >
              <svg width="14" height="14" viewBox="0 0 14 14">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 0C7.552 0 8 0.448 8 1V6H13C13.552 6 14 6.448 14 7C14 7.552 13.552 8 13 8H8V13C8 13.552 7.552 14 7 14C6.448 14 6 13.552 6 13V8H1C0.448 8 0 7.552 0 7C0 6.448 0.448 6 1 6H6V1C6 0.448 6.448 0 7 0Z"
                  fill="#ebf4ff"
                />
              </svg>

              <span class="ml-2">New Job</span>
            </button>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <button
            @click="handleNavbarOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
          >
            <svg
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                :class="{ hidden: this.open, 'inline-flex': !this.open }"
                class="inline-flex"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                :class="{ hidden: !this.open, 'inline-flex': this.open }"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div :class="{ block: this.open, hidden: !this.open }" class="md:hidden">
      <div class="px-2 pt-2 pb-3 sm:px-3">
        <a
          href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
          >Home</a
        >
        <a
          href="#"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >Companies</a
        >
        <a
          href="#"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >Tags</a
        >
        <a
          href="#"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >Favourites</a
        >
        <button
          class="mt-1 w-full flex items-center justify-center text-sm font-medium text-white px-4 py-2 rounded-md bg-indigo-600 focus:outline-none"
        >
          <svg width="14" height="14" viewBox="0 0 14 14">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 0C7.552 0 8 0.448 8 1V6H13C13.552 6 14 6.448 14 7C14 7.552 13.552 8 13 8H8V13C8 13.552 7.552 14 7 14C6.448 14 6 13.552 6 13V8H1C0.448 8 0 7.552 0 7C0 6.448 0.448 6 1 6H6V1C6 0.448 6.448 0 7 0Z"
              fill="#fff"
            />
          </svg>

          <span class="ml-2">New Job</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
