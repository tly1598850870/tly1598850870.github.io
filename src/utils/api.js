import axios from '@/plugins/axios'
import { Guid } from "../assets/guid"
console.log(Guid.NewGuid().ToString("D"))
export function getData(token) {
    return axios({
      url: "/api/app/userInfo",
      method: "GET"
    });
  }