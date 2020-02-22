import dayjs from 'dayjs';

export default {
  computed: {
    formattedDate() {
      return dayjs(this.post.updated_at).format('DD MMM YYYY');
    }
  }
};
