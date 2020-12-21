import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hashbang: false,
  history: true,
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/syndesi',
      name: 'Login',
      component: Login
    }
  ]
})
