import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';
import * as constants from './constants';

const http = axios.create({
  baseURL: 'api.skillstack.com.au/',
  adapter: cacheAdapterEnhancer(axios.defaults.adapter)
});

export default {
  toggleLoading({ commit }) {
    commit(constants.TOGGLE_LOADING);
  },

  fetchRecentJobs({ state, commit }) {
    return http
      .get(
        `/jobs?limit=${constants.RECENT_POST_COUNT}&period=${state.activePeriod}`
      )
      .then(res => {
        commit(constants.SET_RECENT_POSTS, res.data);
        return res.data;
      });
  },

  fetchBySlug(_, slug) {
    return http.get(`/jobs/${slug}`).then(res => res.data);
  },

  fetchByTag(_, tag) {
    return http.get(`/tags/${tag}/jobs`).then(res => res.data);
  },

  setPeriod({ commit }, period) {
    commit('SET_ACTIVE_PERIOD', period);
  }
};
