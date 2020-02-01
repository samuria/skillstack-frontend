<script>
import AppHeader from "./components/shared/AppHeader";
import AppBanner from "./components/shared/AppBanner";

export default {
  name: "App",
  components: {
    AppHeader,
    AppBanner
  }
};
</script>

<template>
  <main id="app">
    <div id="main-wrapper">
      <app-header />
      <app-banner :with-banner="$route.meta.hasBanner" />
      <router-view />
    </div>
  </main>
</template>

<style src="./assets/styles/tailwind.css"></style>
