import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    loading(state) {
      state.isLoading = !state.isLoading;
    }
  },
  actions: {},
  modules: {}
});
