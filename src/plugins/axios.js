"use strict";
import { Guid } from "../assets/guid"
import Vue from 'vue';
import axios from "axios";
import { Toast } from 'vant';

import { from } from '_array-flatten@2.1.2@array-flatten';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

  

const _axios = axios.create({
  // baseURL:'http://120.53.31.103:84',
  baseURL:'https://www.365msmk.com',
  timeout:'5000'
});

_axios.interceptors.request.use(
  function(config) {
    Toast.loading({
      duration: 5000,
      message: '加载中...',
      forbidClick: true,
    });
    const token = sessionStorage.getItem('token')
    if(token){
        config.headers.authorization = `Bearer ${token}`
    }
    config.headers.DeviceID = Guid.NewGuid().ToString("D")
    config.headers.DeviceType = "H5"
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    Toast.clear()
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

// Plugin.install = function(Vue, options) {
//   Vue.axios = _axios;
//   window.axios = _axios;
//   Object.defineProperties(Vue.prototype, {
//     axios: {
//       get() {
//         return _axios;
//       }
//     },
//     $axios: {
//       get() {
//         return _axios;
//       }
//     },
//   });
// };

// Vue.use(Plugin)

export default _axios;
