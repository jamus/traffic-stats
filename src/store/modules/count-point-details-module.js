import { postmanRequest } from '@/http/request.js';
import { endpoints } from '@/http/endpoints.js';

const CountPointData = {
  namespaced: true,
  state: {
    isRequestingCountPointData: false,
    CountPointData: null
  },
  mutations: {
    setIsRequestingCountPointData(state, payload) {
      state.isRequestingCountPointData = payload;
    },
    setCountPointData(state, payload) {
      state.CountPointData = payload;
    },
    emptyCountPointDetailsData(state) {
      state.CountPointData = null;
    }
  },
  actions: {
    requestCountPointData({commit}, payload) {
      commit('setIsRequestingCountPointData', true);
      return postmanRequest.get(endpoints.COUNT_POINT_DETAILS.replace(':count_point_id', payload))
        .then((response) => {
          commit('setCountPointData', response.data.data);
          commit('setIsRequestingCountPointData', false);
        });
    },
    clearCountPointDetailsData({commit}) {
      commit('emptyCountPointDetailsData');
    }
  }
};

export default CountPointData;
