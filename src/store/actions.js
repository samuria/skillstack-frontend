// import axios from 'axios';
// import { cacheAdapterEnhancer } from 'axios-extensions';
import * as constants from './constants';

// const http = axios.create({
//   baseURL: 'localhost:3456',
//   adapter: cacheAdapterEnhancer(axios.defaults.adapter)
// });

export default {
  toggleLoading({ commit }) {
    commit(constants.TOGGLE_LOADING);
  },

  setPeriod({ commit }, period) {
    commit('SET_ACTIVE_PERIOD', period);
  }
};
