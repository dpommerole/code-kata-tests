import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Beer from './views/Beer.vue'
import { getOneRandomBeer, getCurrentBeer } from '@/guards'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/beer/:id?',
      name: 'beer',
      component: Beer,
      props: true,
      beforeEnter: async (to, from, next) => {
        if (to.params.id) {
          getCurrentBeer(next, to.params.id)
          return
        }
        await getOneRandomBeer(to, from, next)
      }
    }
  ]
})
