// 引入vue文件
import Vue from 'vue'
import Vuex from 'vuex'
// 引入vuex
import vuex from 'vuex'
// 持久化本地存储
import per from 'vuex-persistedstate'
// 在vue 中使用vuex
Vue.use(vuex)

Vue.use(Vuex)

export default new Vuex.Store({
// 导出store
export default new vuex.Store({
  // 用来存储变量 所有组件都可以使用
  state: {
<<<<<<< HEAD
    thisshowheader:""
=======
    
>>>>>>> a49477702fb5a4a6cd9185be23a872a894eb9ccf
  },
  // 同步方法
  mutations: {
<<<<<<< HEAD
    changeshow(state,name){
      state.thisshowheader=name
    }
=======

>>>>>>> a49477702fb5a4a6cd9185be23a872a894eb9ccf
  },
  // 异步方法
  actions: {
    
  },
  // 模块化
  modules: {
  }

  },
  // 持久化存储
  plugins:[per()]
})

