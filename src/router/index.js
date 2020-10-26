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
  },
  {
    path: '/coures',
    name: 'Coures',
    component: function () {
      return import('../views/Myclass/Coures.vue')
    }
  },
  {
    path: '/myask',
    name: 'Myask',
    component: function () {
      return import('../views/Ask/Myask.vue')
    }
  },
  {
    path: '/Myexercise',
    name: 'Myexercise',
    component: function () {
      return import('../views/Exercise/Myexercise.vue')
    }
  },
  {
    path: '/mywd',
    name: 'Mywd',
    component: function () {
      return import('../views/My/Mywd.vue')
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
