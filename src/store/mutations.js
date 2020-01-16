import * as constants from "./constants";

export default {
  [constants.SET_ACTIVE_PERIOD](state, period) {
    state.activePeriod = period;
  }
};
