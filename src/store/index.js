import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';
import post from './post';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bp: {},
  },
  mutations: {
    SET_BP(state, bp) {
      state.bp = bp;
    },
  },
  actions: {
    calcBp({ commit }) {
      const width = window.innerWidth;
      const gap = 32 * 2;
      const bp = {
        width,
        mobile: width < 769,
        tablet: width >= 769 && width < 960 + gap,
        desktop: width >= 960 + gap && width < 1152 + gap,
        widescreen: width >= 1152 + gap && width < 1344 + gap,
        fullhd: width >= 1344 + gap,
      };
      commit('SET_BP', bp);
    },
  },
  modules: {
    user,
    post,
  },
});
