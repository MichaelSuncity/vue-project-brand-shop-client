import Vue from "vue";
import Vuex from "vuex";
import auth from './auth';
import info from './info';
import comments from './comments';
import products from './products';
import cart from './cart';
import changePageSize from './changePageSize';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error){
      state.error = error
    },
    clearError(state){
      state.error = null
    }
  },
  getters: {
    error: s => s.error
  },
  actions: {},
  modules: {
    auth, info, comments, products, cart, changePageSize
  },
});
