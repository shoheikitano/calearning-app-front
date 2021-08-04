import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate'

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
      await axios.post('http://localhost:8888/api/logout')
      context.commit('setUser', null)
    },
  },
  modules: {
  },
  // `createPersistedState()`でインスタンス作成。引数に設定を書く
  plugins: [createPersistedState(
    { // ストレージのキーを指定。デフォルトではvuex
      key: 'user',

      // 管理対象のステートを指定。pathsを書かない時は`modules`に書いたモジュールに含まれるステート全て。`[]`の時はどれも保存されない
      paths: [
        'user'
      ],

      // ストレージの種類を指定する。デフォルトではローカルストレージ
      storage: window.sessionStorage
    }
  )]
})
