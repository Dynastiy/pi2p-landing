/* eslint-disable no-undef */

import $request from "@/axios";
import toastify from "toastify-js";

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
    // List Balances
    async balances({ commit }) {
      NProgress.start();
      commit("SET_LOADING", true);
      try {
        let res = await $request.get(
          `account/balances`
        );
        console.log(res);
        let responsePayload = res.data;
        commit("SET_BALANCES_DATA", responsePayload);
        return res;
      } catch (error) {
        console.log(error);
        toastify({
          text: `Internal connection error`,
          className: "info",
          style: {
            background: "red",
            fontSize: "12px",
            borderRadius: "5px",
          },
        }).showToast();
        commit("SET_ERROR", "Internal connection error");
        return error;
      } finally {
        NProgress.done();
      }
    },

     // List Balances
     async sellAds({ commit }) {
        NProgress.start();
        commit("SET_LOADING", true);
        try {
          let res = await $request.get(
            `account/trades?page=1&pageSize=20`
          );
          console.log(res);
          let responsePayload = res.data.data;
          commit("SET_ADS_DATA", responsePayload);
          return res;
        } catch (error) {
          console.log(error);
          toastify({
            text: `Internal connection error`,
            className: "info",
            style: {
              background: "red",
              fontSize: "12px",
              borderRadius: "5px",
            },
          }).showToast();
          commit("SET_ERROR", "Internal connection error");
          return error;
        } finally {
          NProgress.done();
        }
      },

    // View Single Transaction
    async view({ commit }, id) {
      NProgress.start();
      commit("SET_LOADING", true);
      try {
        let res = await $request.get(`admin/withdrawals/${id}`);
        console.log(res);
        let responsePayload = res.data;
        commit("SET_SINGLE_DATA", responsePayload);
        return res;
      } catch (error) {
        console.log(error);
        toastify({
          text: `Internal connection error`,
          className: "info",
          style: {
            background: "red",
            fontSize: "12px",
            borderRadius: "5px",
          },
        }).showToast();
        commit("SET_LOADING", false);
        // commit("SET_SINGLE_ERROR", "Internal connection error");
        return error;
      } finally {
        NProgress.done();
      }
    },

    async updateStatus({ commit, dispatch }, payload) {
      NProgress.start();
      commit("SET_LOADING", true);
      try {
        let res = await $request.put(`admin/withdrawals/${payload.id}/${payload.operation}`);
        console.log(res.data);
        dispatch("list", payload.page)
        dispatch("view", payload.id)
        return res;
      } catch (error) {
        console.log(error);
        toastify({
          text: `Internal connection error`,
          className: "info",
          style: {
            background: "red",
            fontSize: "12px",
            borderRadius: "5px",
          },
        }).showToast();
        commit("SET_ERROR", "Internal connection error");
        return error;
      } finally {
        NProgress.done();
      }
    },
  },
};
