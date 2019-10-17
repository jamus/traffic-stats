import { postmanRequest } from '@/http/request.js';
import { endpoints } from '@/http/endpoints.js';

const TrafficFlowData = {
  namespaced: true,
  state: {
    isRequestingData: false,
    TrafficFlowData: null
  },
  mutations: {
    setIsRequestingData(state, payload) {
      state.isRequestingData = payload;
    },
    setTrafficFlowData(state, payload) {
      state.TrafficFlowData = payload;
    }
  },
  actions: {
    requestTrafficFlowData({commit}) {
      commit('setIsRequestingData', true);
      return postmanRequest.get(endpoints.COUNT_POINTS)
        .then((response) => {
          commit('setTrafficFlowData', response.data.data);
          commit('setIsRequestingData', false);
        });
    }
  }
};

export default TrafficFlowData;
