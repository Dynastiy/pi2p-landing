/* eslint-disable no-undef */

const getDefaultState = () => {
    return {
      openAuthModal: false,
    };
  };
  
  export default {
    namespaced: true,
    state: getDefaultState(),
    getters: {
      isOpen: (state) => state.openAuthModal,
    },
  
    mutations: {
      SET_OPEN_STATE(state, payload) {
        state.openAuthModal = payload;
      },
      REMOVE_MODAL(state) {
        state.openAuthModal = false;
      },
    },
    actions: {
      setOpenState({ state, commit }) {
        let value = state.openAuthModal ? false : true;
        commit("SET_OPEN_STATE", value);
      },
    },
  };
  