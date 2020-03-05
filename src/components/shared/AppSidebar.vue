<script>
import { PAGES } from '@/store/constants';

export default {
  created() {
    this.PAGES = PAGES;
  },

  methods: {
    routeApp(slug) {
      this.$router.push(slug);
    }
  }
};
</script>

<template>
  <a-layout-sider
    width="200"
    :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
  >
    <a-menu
      mode="inline"
      :defaultSelectedKeys="[1]"
      :style="{ height: '100%', borderRight: 0, paddingTop: '16px' }"
    >
      <a-menu-item v-for="(page, index) in PAGES" :key="index + 1">
        <a-icon :type="page.icon" theme="twoTone" />
        {{ page.name }}
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<style scoped></style>
