import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    filters: {},
    cart: []
  },
  getters: {
    filters: state => state.filters,
    cart: state => state.cart
  },
  mutations: {
    add2Cart: (state, item) => {
      state.cart.push(item)
    },
    removeFromCart: (state, index) => {
      state.cart.splice(index, 1)
    },
    setFilter: (state, filter) => {
      const name = `${filter.breed}${filter.subBreed}`
      state.filters[name] = filter
    },
    removeFilter: (state, filter) => {
      const name = `${filter.breed}${filter.subBreed}`
      delete state.filters[name]
    },
    initializeStore: (state) => {
      const LSStore = localStorage.getItem('store')
      if(LSStore) store.replaceState(Object.assign(state, JSON.parse(LSStore)))
    }
  },
  actions: {
    add2Cart: ({ commit }, item) => {
      commit('add2Cart', item)
    },
    removeFromCart: ({ commit }, index) => {
      commit('removeFromCart', index)
    },
    setFilter: ({ commit }, filter) => {
      commit('setFilter', filter)
    },
    removeFilter: ({ commit }, filter) => {
      commit('removeFilter', filter)
    }
  }
})

export default store
