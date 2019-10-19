import { postmanRequest } from '@/http/request.js';
import { endpoints } from '@/http/endpoints.js';

const CountPointsData = {
  namespaced: true,
  state: {
    isRequestingCountPointsData: false,
    CountPointsData: null,
    CountPointsDataFiltered: []
  },
  mutations: {
    setIsRequestingCountPointsData(state, payload) {
      state.isRequestingData = payload;
    },
    setCountPointsData(state, payload) {
      state.CountPointsData = payload;
    },
    setCountPointsDataFiltered(state, payload) {
      state.CountPointsDataFiltered = payload;
    }
  },
  actions: {
    requestCountPointsData({commit}) {
      commit('setIsRequestingCountPointsData', true);
      return postmanRequest.get(endpoints.COUNT_POINTS)
        .then((response) => {
          commit('setCountPointsData', response.data.data);
          commit('setCountPointsDataFiltered', response.data.data);
          commit('setIsRequestingCountPointsData', false);
        });
    },
    updateCountPointsDataFiltered({state, commit}, {param, arg}) {
      let filteredList = state.CountPointsData; 
      if (arg) {
        filteredList = state.CountPointsData.filter(item => item[param] === arg);
      }
      commit('setCountPointsDataFiltered', filteredList);
    }
  }
};

export default CountPointsData;
