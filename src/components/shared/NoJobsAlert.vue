<script>
import { Empty } from 'ant-design-vue';
export default {
  beforeCreate() {
    this.simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
  },
};
</script>

<template>
  <a-empty
    description="No jobs found for the selected period."
    :image="simpleImage"
  />
</template>

<style></style>
