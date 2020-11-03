import Vue from 'vue'
import axios from './plugins/axios'
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

Vue.filter('formatDate', function(timeStamp, format) {
  if (timeStamp) {
    format = format || 'YYYY-MM-DD';
    let week = [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六'
    ];
    let date = new Date(parseInt(timeStamp));
    let o = {
      'M+': date.getMonth() + 1,
      'D+': date.getDate(),
      'h+': date.getHours() % 12,
      'H+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      'S+': date.getMilliseconds(),
      'W+': week[date.getDay()]
    };

    if (/(Y+)/.test(format))
      format = format.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      );
    for (let k in o)
      if (new RegExp('(' + k + ')').test(format))
        format = format.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        );
    return format;
  }
});

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
