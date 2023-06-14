/* eslint-disable no-undef */
import $request from "@/axios";
const getDefaultState = () => {
    return {
      dataSet: [],
    };
  };
  
  export default {
    namespaced: true,
    state: getDefaultState(),
    getters: {
      getData: (state) => state.dataSet,
    },
  
    mutations: {
      SET_DATA(state, payload) {
        state.dataSet = payload;
      },
      REMOVE_MODAL(state) {
        state.openAuthModal = false;
      },
    },

    actions: {
      async getCurrencies({ commit }) {
        let res = await $request.get('/currencies')
        console.log(res.data);
        let resPayload = res.data
        commit("SET_DATA", resPayload);
      },
    },
  };
  