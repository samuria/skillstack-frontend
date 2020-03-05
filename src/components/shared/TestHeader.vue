<script>
export default {};
</script>

<template>
  <a-layout class="layout">
    <a-layout-header id="components-layout-demo-top">
      <div class="logo" />
      <div :style="{ float: 'right' }">
        <a-button icon="search" ghost />
        <a-button
          type="primary"
          icon="plus-circle"
          :style="{ marginLeft: '.5rem' }"
          >New post</a-button
        >
      </div>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px" class="container">
      <div style="margin: 16px 0">
        <a-row>
          <a-col :span="8"
            ><h1>Latest posts</h1>
            <p>See all jobs for a selected period.</p></a-col
          >
          <a-col :span="8"
            ><p>Sort by range</p>
            <a-button-group>
              <a-button>Today</a-button>
              <a-button>This Week</a-button>
              <a-button>This Month</a-button>
            </a-button-group></a-col
          >
          <a-col :span="8"
            ><p>Sort manually</p>
            <a-input-group compact>
              <a-date-picker style="width: 50%" placeholder="From" />
              <a-date-picker style="width: 50%" placeholder="To" />
            </a-input-group>
          </a-col>
        </a-row>
      </div>
      <div
        style="margin: 16px 0"
        :style="{ background: '#fff', padding: '24px', minHeight: '280px' }"
      >
        Content
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
