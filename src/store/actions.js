import * as constants from "./constants";

export default {
  toggleLoading({ commit }) {
    commit(constants.TOGGLE_LOADING);
  },
  setPeriod({ commit }, period) {
    commit("SET_ACTIVE_PERIOD", period);
  }
};
