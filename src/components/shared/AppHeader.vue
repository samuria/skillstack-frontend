<script>
export default {
  name: "AppHeader"
};
</script>

<template>
  <header
    class="container mx-auto px-4 py-6 md:px-24 lg:px-32 xl:px-32 2xl:px-64 bg-white flex items-center justify-between w-full"
  >
    <div>
      <router-link to="/" title="Abstract UI" class="h-6 xl:h-8">
        <span class="text-3xl text-gray-700 font-bold underline">EM</span>
        <span class="text-3xl text-green-600 font-extrabold underline"
          >Soft</span
        >
      </router-link>
    </div>
    <div class="hidden md:block">
      <nav>
        <router-link
          to="#"
          title="Products"
          class="px-4 py-2 inline-block font-bold rounded text-gray-600 hover:bg-gray-200 hover:text-gray-700"
          ><font-awesome-icon icon="bullhorn" /><span class="px-3"
            >Subscribe</span
          ></router-link
        >
        <router-link
          to="add-job"
          title="Products"
          class="px-4 py-2 inline-block font-bold rounded bg-green-600 text-white ml-2"
          ><span class="px-3">Post a job</span></router-link
        >
      </nav>
    </div>
    <div class="md:hidden">
      <nav>
        <router-link
          to="#"
          title="Products"
          class="px-4 py-2 inline-block rounded bg-gray-700 text-gray-100"
          ><font-awesome-icon icon="bullhorn" />
        </router-link>
        <router-link
          to="#"
          title="Products"
          class="px-4 py-2 inline-block rounded bg-green-600 text-gray-100 ml-2"
          ><font-awesome-icon icon="plus"
        /></router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
