import Vue from 'vue'
import Router from 'vue-router'

// Code splitting no nível do router
const Home = () => import('./pages/Index.vue')
const Test = () => import('./pages/Test.vue')

export default () => {
  Vue.use(Router)

  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      { path: '/teste', component: Test }
    ]
  })
}
