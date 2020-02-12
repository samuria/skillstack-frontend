<script>
export default {
  name: 'AppHeader'
};
</script>

<template>
  <a-layout-header class="app-header">
    <div class="logo" />
    <div class="logo" :style="{ float: 'left' }">
      <router-link to="/" title="EMSoft">
        <span class="logo-section-one">EM</span>
        <span class="logo-section-two">Soft</span>
      </router-link>
    </div>
    <div :style="{ float: 'right' }">
      <a-button icon="bell" size="large">
        <span class="btn-subscribe-text">Subscribe</span></a-button
      >
      <a-button
        type="primary"
        size="large"
        icon="plus-circle"
        class="btn-post-ad"
        ><span class="btn-post-ad-text">New post</span></a-button
      >
    </div>
  </a-layout-header>
</template>

<style scoped>
.btn-post-ad {
  margin-left: 10px;
}

@media only screen and (max-width: 768px) {
  .btn-post-ad-text,
  .btn-subscribe-text {
    display: none;
  }

  .app-header {
    padding: 0 20px;
  }
}

@media only screen and (min-width: 768px) {
  .app-header {
    padding: 0 50px;
  }
}

.app-header {
  background-color: #ffffff;
}

.logo-section-one {
  @apply text-3xl text-gray-700 font-bold underline select-none;
}

.logo-section-two {
  @apply text-3xl text-blue-600 font-extrabold underline select-none;
}
</style>
