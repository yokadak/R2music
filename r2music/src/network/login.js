import {request} from "./request"
//登录
export function login(phone,password){
  return request({
    url:'/login/cellphone',
    method:"post",
    data:{
      phone,
      password
    }
  })
}
//获取登录状态
export function loginStatus(){
  return request({
    url:'/login/status',
  })
}