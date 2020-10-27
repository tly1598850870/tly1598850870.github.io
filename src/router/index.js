import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Footer from '@/views/Footer'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/cod',
    name: 'Cod',
    component: function () {
      return import('../views/Myclass/Cod.vue')
    }
  },
    {path: '/gopass',
      name: 'Gopass',
      component: function () {
        return import('../views/Pass/Gopass.vue')
      }
  },
  {
    path: '/topass',
      name: 'Topass',
      component: function () {
        return import('../views/Pass/Topass.vue')
      }
  },
  {
    path: '/footer',
    name: 'Footer',
    component: Footer,
    children:[
      {
        path: 'myhome',
        name: 'Myhome',
        component: function () {
          return import('../views/Home/Myhome.vue')
        }
      },
      {
        path: 'coures',
        name: 'Coures',
        component: function () {
          return import('../views/Myclass/Coures.vue')
        }
      },
      {
        path: 'myask',
        name: 'Myask',
        component: function () {
          return import('../views/Ask/Myask.vue')
        }
      },
      {
        path: 'Myexercise',
        name: 'Myexercise',
        component: function () {
          return import('../views/Exercise/Myexercise.vue')
        },
        children: [
        {
          path: '/Myexercise',
          name: 'Myexercises',
          component: function () {
            return import('../views/Exercise/tabhome/myexercisetab.vue')
          },
        },
        {
          path: 'testing',
          name: 'testing',
          component: function () {
            return import('../views/Exercise/tablist/testing.vue')
          },
        },
        {
          path: 'practice',
          name: 'practice',
          component: function () {
            return import('../views/Exercise/tablist/practice.vue')
          },
        },
        {
          path: 'examination',
          name: 'examination',
          component: function () {
            return import('../views/Exercise/tablist/examination.vue')
          },
        },
        {
          path: 'mistakes',
          name: 'mistakes',
          component: function () {
            return import('../views/Exercise/tablist/mistakes.vue')
          },
        },
        {
          path: 'evaluating',
          name: 'evaluating',
          component: function () {
            return import('../views/Exercise/tablist/evaluating.vue')
          },
        },
        {
          path: 'exercises',
          name: 'exercises',
          component: function () {
            return import('../views/Exercise/tablist/exercises.vue')
          },
        },
        {
          path: 'question',
          name: 'question',
          component: function () {
            return import('../views/Exercise/tablist/question.vue')
          },
        },
      ]
      },
      {
        path: 'mywd',
        name: 'Mywd',
        component: function () {
          return import('../views/My/Mywd.vue')
        }
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
