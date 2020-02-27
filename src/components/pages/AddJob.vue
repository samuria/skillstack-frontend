<script>
import AddJobForm from '../shared/AddJobForm';

export default {
  name: 'AddJob',
  components: {
    AddJobForm
  }
};
</script>

<template>
  <section>
    <div class="lg:px-4 md:px-20 bg-white">
      <div class="container">
        <div class="flex flex-wrap py-16">
          <div class="w-full md:w-2/3">
            <h2 class="text-xl md:text-2xl font-medium text-gray-700">
              <font-awesome-icon icon="plus" /><span class="pl-2"
                >Post a new job</span
              >
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:px-4 md:px-20 mt-10">
      <div class="container"><add-job-form /></div>
    </div>
  </section>
</template>

<style></style>
