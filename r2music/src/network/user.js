/*
 * @Descripttion: 
 * @version: 
 * @Author: yrh
 * @Date: 2021-04-08 11:36:50
 * @LastEditors: yrh
 * @LastEditTime: 2021-05-17 17:00:05
 */
// 637944142
import {request} from "./request"
//获取用户信息
export function getUserInfo(uid){
  return request({
    url:'/user/detail',
    params:{
      uid
    }
  })
}
//获取收藏的歌单，mv等数量
export function getSubCount(){
  return request({
    url:'/user/subcount',
  })
}
//获取用户喜欢的歌曲id列表
export function getLikedMusicIds(uid){
  return request({
    url:'/likelist',
    params:{
      uid
    }
  })
}
export function getLikedAlbums(){
  return request({
    url:'/album/sublist',
  })
}
export function getlikedPlayLists(uid){
  return request({
    url:'/user/playlist',
    params:{
      uid
    }
  })
}