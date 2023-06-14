import Vue from "vue";
import Vuex from "vuex";

// Modules
import modals from "./modals";

import auth from "@/modules/auth/store/index";
import wallet from "@/modules/user/views/wallet/store/index"
import kyc from "@/modules/user/views/kyc/store/index"
import trades from "@/modules/user/views/trades/store/index"
import profile from "@/modules/user/views/profile/store/index"
import transactions from "@/modules/user/views/transactions/store/index"
import orders from "@/modules/user/views/orders/store/index"

import config from "./config"

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
    config,

    
    auth,
    wallet,
    kyc,
    trades,
    profile,
    transactions,
    orders
  },
});
