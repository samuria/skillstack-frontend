<script>
import { VueEditor } from 'vue2-editor';

export default {
  components: {
    VueEditor
  }
};
</script>

<template>
  <div>
    <div
      class="bg-blue-100 rounded border border-blue-300 text-blue-700 px-6 py-4"
      role="alert"
    >
      <p class="font-medium">Important reminder!</p>
      <p class="text-sm font-light">
        In order to add a job posting, you must provide an email address that
        resembles the company name you have specified. <br />A confirmation
        email will be sent to the email address you have specified for
        verification after submitting the form. Your posting will be published
        after clicking the verification link in the email.
      </p>
    </div>

    <form class="w-full mt-12">
      <div class="flex flex-col">
        <div class="mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-email"
          >
            Email address
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-email"
            type="text"
            placeholder="mail@company.com"
          />
        </div>
        <div class="mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-position"
          >
            Position
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-position"
            type="text"
          />
        </div>
        <div class="mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-position"
          >
            Description
          </label>
          <vue-editor />
        </div>
      </div>
    </form>
  </div>
</template>

<style></style>
