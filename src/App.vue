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
    <main>
      <router-view />
    </main>
  </div>
</template>

<style src="./assets/styles/tailwind.css"></style>
