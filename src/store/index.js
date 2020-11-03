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
<<<<<<< HEAD
    jbrFlag: true,
    thisshowheader: "",
    leftarrows: false,
    contentarrows: false,
    rightarrows: false,
    rightseek:false
=======
    jbrFlag:true,
    thisshowheader:"",
    leftarrows:false,
    contentarrows:false,
    pl:[],
>>>>>>> cfca5ac1df81c20e2225a6f9fd4a24887a17ec8a
  },
  // 同步方法
  mutations: {
    changeshow(state,name){
      state.thisshowheader=name
    },
    changeshow(state, name) {
      state.thisshowheader = name
    },
    changeleftarrows(state,name){
      state.leftarrows=name
    },
    changeleftarrows(state, name) {
      state.leftarrows = name
    },
<<<<<<< HEAD
    changerightarrows(state, name) {
      state.rightarrows = name
    },
    changecontentarrows(state, name) {
      state.contentarrows = name
    },
    changerightseek(state, zhis) {
      state.rightseek = zhis
    },
=======
    changecontentarrows(state,name){
      state.contentarrows=name
    },
    pinglun(state,obj){
      state.pl.push(obj)
    }
>>>>>>> cfca5ac1df81c20e2225a6f9fd4a24887a17ec8a
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

