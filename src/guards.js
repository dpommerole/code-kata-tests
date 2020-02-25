import store from '@/store'

export const getOneRandomBeer = async (to, from, next) => {
  try {
    await store.dispatch('getOneRandomBeer')
    next()
  } catch (error) {
    throw error
  }
}

export const getCurrentBeer = (next, id) => {
  store.dispatch('setCurrentBeer', id)
  next()
}