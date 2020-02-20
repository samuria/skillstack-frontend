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
  </div>
  <!-- <a-layout class="layout">
    <app-header />
    <app-banner v-if="$route.meta.hasBanner" />

    <a-layout-content>
      <div
        :style="{
          background: '#fff',
          minHeight: '500px',
          padding: '24px',
          marginTop: '14px'
        }"
        class="container"
      >
        <router-view />
      </div>
    </a-layout-content>
  </a-layout> -->
</template>

<style scoped></style>

<style src="./assets/styles/tailwind.css"></style>
