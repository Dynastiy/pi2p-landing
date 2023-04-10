import Vue from "vue";
import Vuex from "vuex";

// Modules
import modals from "./modals";

import auth from "@/modules/auth/store/index";
import wallet from "@/modules/user/views/wallet/store/index"
import kyc from "@/modules/user/views/kyc/store/index"

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    modals,
    auth,
    wallet,
    kyc
  },
});
