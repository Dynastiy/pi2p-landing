/* eslint-disable no-undef */

import $request from "@/axios";
import toastify from "toastify-js";
import router from "@/router"

const getDefaultState = () => {
  return {
    loading: false,
    error: false,
    success: false,
    balancesDataSet: null,
    adsDataSet: null,
    metaSet: null,
    singleDataSet: null,
  };
};

export default {
  namespaced: true,
  state: getDefaultState(),
  getters: {
    isLoading: (state) => state.loading,
    getData: (state) => state.dataSet,
  },

  mutations: {
    SET_LOADING(state) {
      state.loading = true;
      state.error = false;
      state.success = false;
      //   state.dataSet = null;
    },

    SET_ERROR(state, message) {
      state.error = message;
      state.success = false;
      state.loading = false;
    },

    SET_SUCCESS(state, message) {
      state.success = message;
      state.error = false;
      state.loading = false;
      state.dataSet = null;
    },

    REMOVE_ERROR_SUCCESS(state) {
      state.error = false;
      state.success = false;
      state.regError = false;
      state.regSuccess = false;
      state.validationErrors = {};
      state.loading = false;
    },

    SET_BALANCES_DATA(state, payload) {
      state.balancesDataSet = payload;
      state.metaSet = payload.meta;
      state.loading = false;
      state.error = false;
      state.success = false;
    },

    SET_ADS_DATA(state, payload) {
        state.adsDataSet = payload;
        state.metaSet = payload.meta;
        state.loading = false;
        state.error = false;
        state.success = false;
      },

    SET_SINGLE_DATA(state, payload) {
      state.singleDataSet = payload;
      state.loading = false;
      state.singleError = false;
      state.singleSuccess = true;
    },

    REMOVE_SINGLE_DATA(state) {
      state.singleDataSet = {};
      state.loading = false;
      state.singleError = false;
      state.singleSuccess = false;
    },
  },
  actions: {
    async submitKYC({ commit }, payload) {
      NProgress.start();
      commit("SET_LOADING", true);
      try {
        let res = await $request.post(`account/complete-kyc`, payload);
        console.log(res.data);
        // dispatch("list", payload.page)
        // dispatch("view", payload.id)
        router.push("/kyc-submitted")
        return res;
      } catch (error) {
        console.log(error);
        toastify({
          text: `${error.data.message}`,
          className: "info",
          style: {
            background: "red",
            fontSize: "12px",
            borderRadius: "5px",
          },
        }).showToast();
        commit("SET_ERROR", error.data.message);
        return error;
      } finally {
        NProgress.done();
        commit("SET_LOADING", false);
      }
    },
  },
};
