import { createStore } from 'vuex'

export default createStore({
  state: {
    token:"",
    user: {}
  },
  getters: {
    getToken : state=> state.token,
    getUser : state=> state.user
  },
  mutations: {
  },
  actions: {
    storeToken: ({state},value) => state.token = value,
    storeUser: ({state},value) => state.user = value,
    clearToken: ({state}) => state.token = "",
  },
  modules: {
  }
})
