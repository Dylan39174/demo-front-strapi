import { createStore } from 'vuex'

export default createStore({
  state: {

    pageData: [],

  },
  getters: {

  },
  mutations: {
    setPageData(state, newState) {
      state.pageData = newState;
    }
  },
  actions: {

  },
  modules: {

  }
})
