import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/myhome',
    name: 'Myhome',
    component: function () {
      return import('../views/Home/Myhome.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
