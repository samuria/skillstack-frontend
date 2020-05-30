import * as timeago from 'timeago.js';

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    lastPost: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    detailsUrl() {
      return `/jobs/${this.post.slug}`;
    },
    company() {
      return this.post.company;
    },
    timeago() {
      return timeago.format(this.post.created_at);
    },
    postTypeClassName() {
      const CLASS_MAP = {
        0: 'full-time',
        1: 'full-time',
        2: 'part-time',
        3: 'internship',
        4: 'freelance',
      };

      return {
        [CLASS_MAP[this.post.type]]: true,
      };
    },
  },
};
