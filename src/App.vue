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
  <!-- <main id="app">
    <div id="main-wrapper">
      <app-header />
      <app-banner :with-banner="$route.meta.hasBanner" />
      <router-view />
    </div>
  </main> -->
  <a-layout class="layout" theme="light">
    <app-header />
    <app-banner :with-banner="$route.meta.hasBanner" />
    <a-layout-content class="content-layout" style="background-color: #fff">
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
@media only screen and (max-width: 768px) {
  .content-layout {
    padding: 20px;
  }
}

@media only screen and (min-width: 768px) {
  .content-layout {
    padding: 50px;
  }
}
</style>

<!--<style src="./assets/styles/tailwind.css"></style> -->
