import { postmanRequest } from '@/http/request.js';
import { endpoints } from '@/http/endpoints.js';

const greetingsData = {
  namespaced: true,
  state: {
    isRequestingData: false,
    helloData: null
  },
  mutations: {
    setIsRequestingData(state, payload) {
      state.isRequestingData = payload;
    },
    setGreetingsData(state, payload) {
      state.helloData = payload;
    }
  },
  actions: {
    requestHelloData({commit}) {
      commit('setIsRequestingData', true);
      return postmanRequest.get(endpoints.HELLO_DATA)
        .then((response) => {
          commit('setGreetingsData', response.data.data);
          commit('setIsRequestingData', false);
        });
    }
  }
};

export default greetingsData;
