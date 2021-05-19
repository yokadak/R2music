/*
 * @Descripttion: 用于登录的API
 * @version: 
 * @Author: yrh
 * @Date: 2021-04-08 11:39:22
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-19 20:43:43
 */
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
//刷新登录状态
export function refreshLoginStatus(){
  return request({
    url:'/login/refresh',
  })
}
//退出登录
export function logout(){
  return request({
    url:'/logout',
  })
}