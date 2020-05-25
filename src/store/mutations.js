import * as constants from './constants';

export default {
  [constants.TOGGLE_LOADING](state) {
    state.isLoading = !state.isLoading;
  },
  [constants.SET_RECENT_POSTS](state, recentPosts) {
    state.recentPosts = recentPosts;
  },
  [constants.SET_ACTIVE_PERIOD](state, period) {
    state.activePeriod = period;
  },
  [constants.SET_TAGS](state, tags) {
    state.tags = tags;
  },
};
