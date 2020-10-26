import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import rem from '@/assets/rem.js'
import Treetable from 'vue-table-with-tree-grid'

Vue.config.productionTip = false

Vue.prototype.$Axios=axios


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
