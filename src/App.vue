<script>
import AppNavigation from './components/shared/AppNavigation';
import AppBanner from './components/shared/AppBanner';

export default {
  name: 'App',
  components: {
    AppNavigation,
    AppBanner,
  },
};
</script>

<template>
  <div class="main antialiased container">
    <app-navigation />
    <app-banner v-if="$route.meta.hasBanner" />
    <main>
      <router-view />
    </main>
  </div>
</template>

<!-- <style src="./assets/styles/tailwind.css"></style> -->

<!--<style>
a,
button {
  @apply transition duration-200 ease-in-out;
}
</style>
-->
