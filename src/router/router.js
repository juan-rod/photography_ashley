import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'

Vue.use(Router)

var router = new Router({
  base: '/',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export { router }
