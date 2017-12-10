import Vue from 'vue'
import Vuex from 'vuex'

// import demographics from './modules/demographics'
// import login from './modules/login'
// import rewards from './modules/rewards'
// import surveys from './modules/surveys'
const state = {
  currentUser: null,
  isAuth: false
}
const getters = {
  isAuth: state => state.isAuth,
  currentUser: state => state.currentUser
}

const actions = {
  setUser ({ commit }, user) {
    commit('SET_USER', user)
  },
  setAuth ({ commit }, data) {
    commit('SET_AUTH', data)
  }
}

const mutations = {
  SET_AUTH (state, isAuth) {
    state.isAuth = isAuth
    console.log('SET_AUTH state.isAuth:', state.isAuth)
  },
  SET_USER (state, user) {
    state.currentUser = user
    console.log('SET_USER state.currentUser:', state.currentUser)
  }
}

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
