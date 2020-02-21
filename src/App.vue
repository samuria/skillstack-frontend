<script>
import AppHeader from './components/shared/AppHeader';
import AppBanner from './components/shared/AppBanner';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppBanner
  }
};
</script>

<template>
  <div class="main">
    <app-header />
    <app-banner v-if="$route.meta.hasBanner" />
    <main class="lg:px-4 md:px-20 pt-10">
      <router-view class="container" />
    </main>
  </div>
</template>

<style scoped></style>

<style src="./assets/styles/tailwind.css"></style>
