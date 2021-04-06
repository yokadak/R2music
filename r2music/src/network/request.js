import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL:'http://localhost:3000',
    timeout:5000  
  })
  //请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)   
  })
  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)   
  })
  //instance是一个promise对象,发送网络请求
   return instance(config)
}