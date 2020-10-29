import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import rem from '@/assets/rem.js'
import Treetable from 'vue-table-with-tree-grid'
import common from './assets/common.css'

Vue.config.productionTip = false

Vue.prototype.$Axios=axios

Vue.filter('time',function(el){
  el=new Date(el)
  // return el.toLocaleDateString(el)
  return el.toLocaleString()
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
