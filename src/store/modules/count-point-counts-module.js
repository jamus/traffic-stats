import { postmanRequest } from '@/http/request.js';
import { endpoints } from '@/http/endpoints.js';
import { getDataSetItemColour } from '@/utilities/getDataSetItemColour.js';

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
    },
    emptyCountPointCountsData(state) {
      state.CountPointCountsData = null;
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
    },
    clearCountPointCountsData({commit}) {
      commit('emptyCountPointCountsData');
    }
  },
  getters: {
    getVehicleCountByDirection: (state) => (vehicle, direction) => {
      const resultsFromDirection = state.CountPointCountsData.filter(item => item.direction_of_travel === direction);
      return resultsFromDirection.map(item => item[vehicle]);
    },
    getDataset: () => (data, label) => {
      return {
        label: label,
        data: data,
        borderColor: getDataSetItemColour(label),
        fill: false,
        borderWidth: 0
      }
    }
  }
};

export default CountPointCountsData;
