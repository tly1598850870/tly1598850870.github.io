// 引入vue文件
import Vue from 'vue'
// 引入vuex
import vuex from 'vuex'
// 持久化本地存储
import per from 'vuex-persistedstate'
// 在vue 中使用vuex
Vue.use(vuex)


// 导出store
export default new vuex.Store({
  // 用来存储变量 所有组件都可以使用
  state: {
    jbrFlag: true,
    thisshowheader: "",
    leftarrows: false,
    contentarrows: false,
    rightarrows: false,
    rightseek:false
  },
  // 同步方法
  mutations: {
    changeshow(state, name) {
      state.thisshowheader = name
    },
    changeleftarrows(state, name) {
      state.leftarrows = name
    },
    changerightarrows(state, name) {
      state.rightarrows = name
    },
    changecontentarrows(state, name) {
      state.contentarrows = name
    },
    changerightseek(state, zhis) {
      state.rightseek = zhis
    },
  },
  // 异步方法
  actions: {

  },
  // 模块化
  modules: {
  },
  // 持久化存储
  plugins: [per()]
})

