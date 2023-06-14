/* eslint-disable no-undef */

import $request from "@/axios";
import toastify from "toastify-js";

const getDefaultState = () => {
  return {
    loading: false,
    error: false,
    success: false,
    singleDataSet: null,
    dataSet: null
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

    SET_DATA(state, payload) {
        state.dataSet = payload;
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
     // Get User Profile
     async profile({ commit }) {
        NProgress.start();
        commit("SET_LOADING", true);
        try {
          let res = await $request.get(
            `account/profile`
          );
          console.log(res);
          let responsePayload = res.data;
          commit("SET_DATA", responsePayload);
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

       // View Trade
     async updatePersonalDetails({ commit, dispatch}, payload) {
      NProgress.start();
      commit("SET_LOADING", true);
      try {
        let res = await $request.put(
          `account/update-profile`, payload
        );
        console.log(res);
        dispatch("profile");
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

    // List My Trades
    async myTrades({ commit }) {
      NProgress.start();
      commit("SET_LOADING", true);
      try {
        let res = await $request.get(
          `account/my-trades?page=1&pageSize=20`
        );
        console.log(res);
        let responsePayload = res.data.data;
        commit("SET_DATA", responsePayload);
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
