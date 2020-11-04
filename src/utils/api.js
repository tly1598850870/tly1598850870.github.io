import axios from '@/plugins/axios'
import { Guid } from "../assets/guid"
console.log(Guid.NewGuid().ToString("D"))
export function getData() {
    return axios({
      url: "/api/app/userInfo",
      method: "GET"
    });
  }
  export function userInfo() {
    return axios({
      url: "/api/app/userInfo",
      method: "GET"
    });
  }
  export function user(datas) {
    return axios({
      url: "/api/app/user",
      method: "PUT",
      data:{
        nickname:datas
      }
    });
  }
  export function sex(datas) {
    return axios({
      url: "/api/app/user",
      method: "PUT",
      data:{
        sex:datas
      }
    });
  }
  export function city(data) {
    return axios({
      url: `/api/app/sonArea/${data}?`,
      method: "GET",
    });
  }