import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  getters: { // getter相当于vue中的computed
    getToken: (state) => { return state.token }
  },
  mutations: {
    set_token (state, theToken) { // state是拿到的state对象
      localStorage.setItem('token', theToken)// 把本地存的token值给vuex
      state.token = theToken
      console.log('store:' + state.token)
    },
    del_token (state) {
      localStorage.removeItem('token')
      state.token = ''
    }
  },
  actions: { // 可以直接用mutation去修改state的值，但官方建议使用action去调用mutations

  },
  modules: {
  }
})
