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
    meta:{
      title:'登录'
    }
  },
  {
    path: '/passxg',
    name: 'Passxg',
    component: function () {
      return import('../views/Pass/Passxg.vue')
    },
    meta:{
      title:'密码修改'
    }
  },
  {
    path: '/gzls',
    name: 'Gzls',
    component: function () {
      return import('../views/Myclass/Gzls.vue')
    },
    meta:{
      title:'我的关注'
    }
  },
  {
    path: '/scls',
    name: 'Scls',
    component: function () {
      return import('../views/Myclass/Scls.vue')
    },
    meta:{
      title:'我的收藏'
    }
  },
  {
    path: '/myvideo',
    name: 'Myvideo',
    component: function () {
      return import('../views/Myclass/Myvideo.vue')
    },
    meta:{
      title:'视频'
    }
  },
  {
    path: '/mycoures',
    name: 'Mycoures',
    component: function () {
      return import('../views/Myclass/Mycoures.vue')
    },
    meta:{
      title:'我的学习'
    }
  },
  {
    path: '/info',
    name: 'Info',
    component: function () {
      return import('../views/My/Info.vue')
    },
    meta:{
      title:'个人信息'
    }
  },
  {
    path: '/exchange',
    name: 'Exchange',
    component: function () {
      return import('../views/My/Exchange.vue')
    },
    meta:{
      title:'学习卡兑换'
    }
  },
  {
    path: '/cod',
    name: 'Cod',
    component: function () {
      return import('../views/Myclass/Cod.vue')
    },
    meta:{
      title:'课程详情'
    }
  },
  {
    path: '/card',
    name: 'Card',
    component: function () {
      return import('../views/My/Card.vue')
    },
    meta:{
      title:'学习卡'
    }
  },
  {
    path: '/setmessage',
    name: 'Setmessage',
    component: function () {
      return import('../views/My/Setmessage.vue')
    },
    meta:{
      title:'信息填写'
    }
  },
  {
    path: '/sex',
    name: 'Sex',
    component: function () {
      return import('../views/My/Sex.vue')
    },
    meta:{
      title:'修改昵称'
    }
  },
  {
    path: '/gopass',
    name: 'Gopass',
    component: function () {
      return import('../views/Pass/Gopass.vue')
    },
    meta:{
      title:'忘记密码'
    }
  },
  {
    path: '/xinfen',
    name: 'Xinfen',
    component: function () {
      return import('../views/Xinfen.vue')
    },
  },
  {
    path: '/study',
    name: 'Study',
    component: function () {
      return import('../views/Myclass/Study.vue')
    },
    meta:{
      title:'学习详情'
    }
  },
  {
    path: '/date',
    name: 'Date',
    component: function () {
      return import('../views/Myclass/Date.vue')
    },
    meta:{
      title:'课程详情'
    }
  },
  {
    path: '/bmfk',
    name: 'Bmfk',
    component: function () {
      return import('../views/Myclass/Bmfk.vue')
    },
    meta:{
      title:'确认订单'
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: function () {
      return import('../views/Search.vue')
    },
    meta:{
      title:'课程详情'
    }
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: function () {
      return import('../views/Myclass/Teacher.vue')
    },
    meta:{
      title:'讲师详情'
    }
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: function () {
      return import('../views/Home/calendar.vue')
    },
    meta:{
      title:'一对一辅导'
    }
  },
  {
    path: '/coach',
    name: 'coach',
    component: function () {
      return import('../views/Home/coach.vue')
    },
    meta:{
      title:'一对一辅导'
    }
  },
  {
    path: '/neworder',
    name: 'Neworder',
    component: function () {
      return import('../views/Myclass/Neworder.vue')
    },
    meta:{
      title:'预约课程'
    }
  },
  {
    path: '/topass',
    name: 'Topass',
    component: function () {
      return import('../views/Pass/Topass.vue')
    },
    meta:{
      title:'验证码登录'
    }
  },
  {
    path: '/mycurrency',
    name: 'Mycurrency',
    component: function () {
      return import('../views/My/Mycurrency.vue')
    },
    meta:{
      title:'我的余额'
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: function () {
      return import('../views/My/Order.vue')
    },
    meta:{
      title:'订单'
    }
  },
  {
    path: '/coupon',
    name: 'Coupon',
    component: function () {
      return import('../views/My/Coupon.vue')
    },
    meta:{
      title:'优惠券'
    }
  },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer,
      children: [
      {
        path: 'myhome',
        name: 'Myhome',
        component: function () {
          return import('../views/Home/Myhome.vue')
        },
        meta:{
          title:'每时每课'
        }
      },
      {
        path: 'coures',
        name: 'Coures',
        component: function () {
          return import('../views/Myclass/Coures.vue')
        },
        meta:{
          title:'特色课'
        }
      },
      {
        path: 'myask',
        name: 'Myask',
        component: function () {
          return import('../views/Ask/Myask.vue')
        },
        meta:{
          title:'约课记录'
        }
      },
      {
        path: 'Myexercise',
        name: 'Myexercise',
        component: function () {
          return import('../views/Exercise/Myexercise.vue')
        },
        children: 
        [
          {
            path: 'collect',
            name: 'collect',
            component: function () {
              return import('../views/Exercise/tablist/collect.vue')
            },
          },
          {
           path: 'showclass',
           name: 'Showclass',
           component: function () {
              return import('../views/Exercise/tablist/showclass.vue')
           },
            meta:{
              title:'考点练习'
            },
          },
          {
            path: 'seek',
            name: 'Seek',
            component: function () {
            return import('../views/Exercise/tablist/seek.vue')
            },
            meta:{
              title:'搜索'
            },
          },
          {
            path: 'showclass',
            name: 'showclass',
            component: function () {
              return import('../views/Exercise/tablist/showclass.vue')
            },
          },
          {
            path: 'seek',
            name: 'seek',
            component: function () {
              return import('../views/Exercise/tablist/seek.vue')
            },
          },
          {
            path: 'Myexercise',
            name: 'Myexercises',
            component: function () {
              return import('../views/Exercise/tabhome/myexercisetab.vue')
            },
            meta:{
              title:'练习'
            },
          },
          {
            path: 'testing',
            name: 'testing',
            component: function () {
              return import('../views/Exercise/tablist/testing.vue')
            },
            meta:{
              title:'考点练习'
            },
          },
          {
            path: 'practice',
            name: 'practice',
            component: function () {
              return import('../views/Exercise/tablist/practice.vue')
            },
            meta:{
              title:'套卷练习'
            },
          },
          {
            path: 'examination',
            name: 'examination',
            component: function () {
              return import('../views/Exercise/tablist/examination.vue')
            },
            meta:{
              title:'仿真模考'
            },
          },
          {
            path: 'mistakes',
            name: 'mistakes',
            component: function () {
              return import('../views/Exercise/tablist/mistakes.vue')
            },
            meta:{
              title:'错题练习'
            },
          },
          {
            path: 'evaluating',
            name: 'evaluating',
            component: function () {
              return import('../views/Exercise/tablist/evaluating.vue')
            },
            meta:{
              title:'评测记录'
            },
          },
          {
            path: 'exercises',
            name: 'exercises',
            component: function () {
              return import('../views/Exercise/tablist/exercises.vue')
            },
            meta:{
              title:'习题收藏'
            },
          },
          {
            path: 'question',
            name: 'question',
            component: function () {
              return import('../views/Exercise/tablist/question.vue')
            },
            meta:{
              title:'考点练习'
            },
          },
          {
            path: 'analysis',
            name: 'analysis',
            component: function () {
              return import('../views/Exercise/tablist/analysis.vue')
            },
            meta:{
              title:'评测记录'
            },
          },
          {
            path: 'again',
            name: 'again',
            component: function () {
              return import('../views/Exercise/tablist/again.vue')
            },
            meta:{
              title:'评测记录'
            },
          },
          
        ]
      },
      {
        path: 'mywd',
        name: 'Mywd',
        component: function () {
          return import('../views/My/Mywd.vue')
        },
        meta:{
          title:'个人中心'
        }
      },
      {
        path: '/:id',
        redirect: '/cod'
      },
    ]
  },
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  console.log(from.path,to.path)

  document.title = to.meta.title
  
  if (sessionStorage.getItem("token") == null) {
    if (from.path == to.path) {
      next()
    } else if (to.path == "/toPass") {
      next()
    } else if (to.path == "/goPass") {
      next()
    } else if (to.path == "/") {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})
export default router
