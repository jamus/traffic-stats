import { postmanRequest } from '@/http/request.js';
import { endpoints } from '@/http/endpoints.js';

const CountPointCountsData = {
  namespaced: true,
  state: {
    isRequestingCountPointCountsData: false,
    CountPointCountsData: null
  },
  mutations: {
    setIsRequestingCountPointCountsData(state, payload) {
      state.isRequestingCountPointCountsData = payload;
    },
    setCountPointCountsData(state, payload) {
      state.CountPointCountsData = payload;
    }
  },
  actions: {
    requestCountPointCountsData({commit}, payload) {
      commit('setIsRequestingCountPointCountsData', true);
      return postmanRequest.get(endpoints.COUNT_POINT_COUNT_DATA.replace(':count_point_id', payload))
        .then((response) => {
          commit('setCountPointCountsData', response.data.data);
          commit('setIsRequestingCountPointCountsData', false);
        });
    }
  },
  getters: {
    getCountsByDirection: (state) => (direction_of_travel) => {
      return state.CountPointCountsData.filter(item => item.direction_of_travel === direction_of_travel)
    }
  }
};

export default CountPointCountsData;
