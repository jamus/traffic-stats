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
      if (param === 'road_category') { // just sorting list for UI feedback on list change
        filteredList = filteredList.sort(function(a, b) {
          if (a.road_category < b.road_category) { return -1; }
          if (a.road_category > b.road_category) { return 1; }
          return 0;
        });
      }
      if (param === 'road_type') { // just sorting list for UI feedback on list change
        filteredList = filteredList.sort(function(a, b) {
          if (a.road_type < b.road_type) { return -1; }
          if (a.road_type > b.road_type) { return 1; }
          return 0;
        });
      }
      commit('setCountPointsDataFiltered', filteredList);
    },
    updateCountPointsDataFilteredByLength({state, commit}, val) {
      let filteredList = state.CountPointsData.filter(item => +item.link_length_km <= val && +item.link_length_km > 0);
      let sorted = filteredList.sort(function(a, b) {
          return +a.link_length_km - +b.link_length_km;
      }).reverse();
      commit('setCountPointsDataFiltered', sorted);
    }
  }
};

export default CountPointsData;
