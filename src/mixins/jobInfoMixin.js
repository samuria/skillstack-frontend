import dayjs from 'dayjs';

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },

  computed: {
    formattedDate() {
      return dayjs(this.post.updated_at).format('DD MMM YYYY');
    }
  }
};
