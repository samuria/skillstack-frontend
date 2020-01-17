import TimeAgo from "javascript-time-ago";
import { JOB_TYPE_MAP } from "../store/constants";

import en from "javascript-time-ago/locale/en";
TimeAgo.addLocale(en);

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    detailsUrl() {
      return `/jobs/${this.post.slug}`;
    },
    company() {
      return this.post.company;
    },
    jobType() {
      return JOB_TYPE_MAP[this.post.type] || "";
    },
    timeago() {
      const timeAgo = new TimeAgo("en-US");

      const timeSincePosted = timeAgo.format(
        new Date(this.post.created_at) - 2 * 60 * 60 * 1000
      );

      return timeSincePosted;
    },
    postTypeClassName() {
      const CLASS_MAP = {
        0: "full-time",
        1: "full-time",
        2: "part-time",
        3: "internship",
        4: "freelance"
      };

      return {
        [CLASS_MAP[this.post.type]]: true
      };
    }
  }
};
