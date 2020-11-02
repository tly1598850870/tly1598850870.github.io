import axios from '@/plugins/axios'
import { Guid } from "../assets/guid"
console.log(Guid.NewGuid().ToString("D"))
export function gets(url,data){
    return axios.get(url,{
        params:data
    })
}
export function posts(url,data){
    return axios.post(url,data)
}
export function getData(token) {
    return axios({
      url: "/api/app/userInfo",
      method: "GET"
    });
  }