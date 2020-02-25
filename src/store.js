import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const SET_CURRENT_BEER = 'SET_CURRENT_BEER'
const SET_BEERS_LIST = 'SET_BEERS_LIST'
const FLUSH_CURRENT_BEER = 'FLUSH_CURRENT_BEER'

export default new Vuex.Store({
  state: {
    currentBeer: {},
    beersList: []
  },
  getters: {
    getCurrentBeer: state => state.currentBeer,
    getBeerList: state => state.beersList
  },
  mutations: {
    [SET_CURRENT_BEER] (state, beer) {
      state.currentBeer = beer
    },
    [SET_BEERS_LIST] (state, beers) {
      state.beersList = beers
    },
    [FLUSH_CURRENT_BEER] (state) {
      state.currentBeer = {}
    }
  },
  actions: {
    async fetchBeersList ({commit}) {
      try {
        let result = await axios.get('https://api.punkapi.com/v2/beers')
        commit(SET_BEERS_LIST, result.data)
      } catch (e) {
        throw e
      }
    },
    async getOneRandomBeer ({commit}) {
      try {
        let result = await axios.get('https://api.punkapi.com/v2/beers/random')
        commit(SET_CURRENT_BEER, result.data[0])
      } catch (e) {
        throw e
      }
    },
    setCurrentBeer ({commit, state}, id) {
      let currentBeer = state.beersList.find(beer => beer.id === id)
      commit(SET_CURRENT_BEER, currentBeer)
    },
    flushCurrentBeer ({commit}) {
      commit(FLUSH_CURRENT_BEER)
    }
  }
})
