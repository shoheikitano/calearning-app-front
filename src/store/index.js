import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    async register (context, data) {
      let response = await axios.post('http://localhost:8888/api/register', data)
      context.commit('setUser', response.data)
    },
    async login (context, data) {
      let response = await axios.post('http://localhost:8888/api/login', data)
      if (response.data == null) {
        context.commit('setUser', null)
      } else {
        context.commit('setUser', response.data)
      }
    },
    async logout (context) {
      context.commit('setUser', null)
    },
  },
  modules: {
  }
})
