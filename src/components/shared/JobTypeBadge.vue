<script>
export default {
  props: ['post'],
  data: function() {
    return {
      buttonType: this.post.type
    };
  },

  created: function() {
    this.buttonType =
      'btn-job-' + this.buttonType.replace(/\s+/g, '-').toLowerCase();
  }
};
</script>

<template>
  <a-button :class="buttonType" :style="{ width: '100%' }">{{
    post.type
  }}</a-button>
</template>

<style scoped>
.btn-job-full-time {
  color: #186fc9;
  border-color: #186fc9;
  background-color: #f1f7fc;
}

.btn-job-part-time {
  color: #f1630d;
  border-color: #f1630d;
  background-color: #fef6f0;
}

.btn-job-intern {
  color: #dcaa0c;
  border-color: #dfb634;
  background-color: #fdfcf2;
}

.btn-job-remote {
  color: #9b59b6;
  border-color: #9b59b6;
  background-color: #f5eef7;
}
</style>
