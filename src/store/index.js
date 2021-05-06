import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    factories: [
      {
        id: 4,
        country: 'France',
        city: 'Paris'
      },
      {
        id: 5,
        country: 'Italy',
        city: 'Rome'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
