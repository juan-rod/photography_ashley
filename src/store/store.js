import Vue from 'vue'
import Vuex from 'vuex'

// import demographics from './modules/demographics'
// import login from './modules/login'
// import rewards from './modules/rewards'
// import surveys from './modules/surveys'
const state = {
  isAuth: false
}
const getters = {
  isAuth: state => state.isAuth
}

const actions = {

}

const mutations = {
  SET_AUTH (state, isAuth) {
    state.isAuth = isAuth
    console.log('SET_AUTH state.isAuth:', state.isAuth)
  }
}

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
