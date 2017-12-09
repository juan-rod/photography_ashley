import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'
import * as firebase from 'firebase'
import store from '@/store/store'

Vue.use(Router)

var router = new Router({
  base: '/',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

let config = {
  apiKey: 'AIzaSyDQ_yuW8qKTv2zwyYj8hOsAoIIdlqAfZuU',
  authDomain: 'ashley-photography-46b40.firebaseapp.com',
  databaseURL: 'https://ashley-photography-46b40.firebaseio.com',
  projectId: 'ashley-photography-46b40',
  storageBucket: '',
  messagingSenderId: '283199032451'
}
firebase.initializeApp(config)

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    const isAuth = store.state.isAuth
    if (isAuth) {
      next()
    } else {
      next({ path: '/admin-login' })
    }
  } else {
    next()
  }
})

export { router }
