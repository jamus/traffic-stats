import { postmanRequest } from '@/http/request.js';
import { endpoints } from '@/http/endpoints.js';

const CountPointsData = {
  namespaced: true,
  state: {
    isRequestingCountPointsData: false,
    CountPointsData: null
  },
  mutations: {
    setIsRequestingCountPointsData(state, payload) {
      state.isRequestingData = payload;
    },
    setCountPointsData(state, payload) {
      state.CountPointsData = payload;
    }
  },
  actions: {
    requestCountPointsData({commit}) {
      commit('setIsRequestingCountPointsData', true);
      return postmanRequest.get(endpoints.COUNT_POINTS)
        .then((response) => {
          commit('setCountPointsData', response.data.data);
          commit('setIsRequestingCountPointsData', false);
        });
    }
  }
};

export default CountPointsData;
