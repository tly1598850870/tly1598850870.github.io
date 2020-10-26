import axios from '@/plugins/axios'
export function gets(url,data){
    return axios.get(url,{
        params:data
    })
}
export function posts(url,data){
    return axios.post(url,data)
}
