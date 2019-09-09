import Vue from 'vue';
import Vuex from 'vuex';

import axios from '@/plugins/axios';

Vue.use(Vuex);

const SET_USER = 'SET_USER';

const user = {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    REMOVE_USER(state) {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
  getters: {
    fullName(state) {
      if (state.user) {
        return `${state.user.lastName} ${state.user.firstName}`;
      }
      return '';
    },
    user(state) {
      return state.user;
    },
  },
  actions: {

    async setUser(context, user) {
      try {
        context.commit(SET_USER, user);
      } catch (error) {
        throw new Error(error);
      }
    },

    async userLogin(context, data) {
      try {
        const response = await axios.post('user/authenticate/', data);
        return context.commit(SET_USER, response.data.user);
      } catch (error) {
        throw error;
      }
    },

  },
};

export default user;
